const express = require('express');
const { IgApiClient } = require('instagram-private-api');
const archiver = require('archiver');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const ig = new IgApiClient();

app.use(express.json());

// Add this after creating the app
app.use(express.static('public'));

// Add this route at the beginning of your routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Instagram Login
async function login() {
    ig.state.generateDevice(process.env.IG_USERNAME);
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
}

// Download einzelner Post
app.get('/download/post/:shortcode', async (req, res) => {
    try {
        await login();
        const shortcode = req.params.shortcode;
        const media = await ig.media.info(shortcode);
        
        const archive = archiver('zip');
        res.attachment('instagram-post.zip');
        archive.pipe(res);

        if (media.items[0].video_versions) {
            // Video/Reel herunterladen
            const videoUrl = media.items[0].video_versions[0].url;
            archive.append(require('request')(videoUrl), { name: 'video.mp4' });
        } else {
            // Foto herunterladen
            const imageUrl = media.items[0].image_versions2.candidates[0].url;
            archive.append(require('request')(imageUrl), { name: 'image.jpg' });
        }

        archive.finalize();
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Download ganzer Account
app.get('/download/account/:username', async (req, res) => {
    try {
        await login();
        const username = req.params.username;
        const userId = await ig.user.getIdByUsername(username);
        const feed = ig.feed.user(userId);
        
        const archive = archiver('zip');
        res.attachment(`${username}-instagram.zip`);
        archive.pipe(res);

        let posts = [];
        do {
            const items = await feed.items();
            posts = posts.concat(items);
        } while (feed.isMoreAvailable());

        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            if (post.video_versions) {
                const videoUrl = post.video_versions[0].url;
                archive.append(require('request')(videoUrl), { name: `post_${i}/video.mp4` });
            } else {
                const imageUrl = post.image_versions2.candidates[0].url;
                archive.append(require('request')(imageUrl), { name: `post_${i}/image.jpg` });
            }
        }

        archive.finalize();
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});