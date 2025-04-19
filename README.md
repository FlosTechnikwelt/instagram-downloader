# Instagram Downloader

Ein Tool zum Herunterladen von Instagram-Posts, Reels und kompletten Accounts als ZIP-Datei.

## Features

- Download einzelner Instagram-Posts (Bilder, Videos, Reels)
- Download kompletter Instagram-Accounts
- Benutzerfreundliche Web-Oberfläche
- ZIP-Export der heruntergeladenen Inhalte
- Separate Ordner für jeden Post bei Account-Downloads

## Installation

1. Stelle sicher, dass [Node.js](https://nodejs.org/) auf deinem System installiert ist.

2. Klone oder lade dieses Repository herunter.

3. Installiere die benötigten Abhängigkeiten:
   ```bash
   npm install

4. Erstelle eine .env Datei im Hauptverzeichnis mit deinen Instagram-Anmeldedaten:
   ```bash
   INSTAGRAM_USERNAME=dein_username
   INSTAGRAM_PASSWORD=dein_passwort

## Verwendung

1. Starte den Server:
   ```bash
   npm start

2. Öffne deinen Webbrowser und navigiere zu
    ```plaintext
    localhost:3000

3. Für einzelne Posts:
- Kopiere die URL eines Instagram-Posts (z.B. https://www.instagram.com/p/ABC123 )
- Füge die URL in das "Download Single Post" Feld ein
- Klicke auf "Download Post"

4. Für komplette Accounts:
- Kopiere die URL eines Instagram-Accounts (z.B. URL_ADDRESS.instagram.com/dein_account )
- Füge die URL in das "Download Account" Feld ein
- Klicke auf "Download Account"

## Wichtige Hinweise

- Die heruntergeladenen Dateien werden als ZIP bereitgestellt
- Bei Account-Downloads wird jeder Post in einem separaten Ordner gespeichert
- Das Tool unterstützt Fotos, Videos und Reels
- Ein Instagram-Account wird für die Authentifizierung benötigt
- Die Download-Geschwindigkeit hängt von deiner Internetverbindung und der Größe der Inhalte ab

## Technische Anforderungen
- Node.js (Version 14 oder höher)
- Internetverbindung
- Gültige Instagram-Anmeldedaten

## Fehlerbehebung
Falls Fehler auftreten:

1. Überprüfe deine Instagram-Anmeldedaten in der .env Datei
2. Stelle sicher, dass alle Abhängigkeiten korrekt installiert sind
3. Überprüfe, ob die eingegebenen URLs gültig sind
4. Vergewissere dich, dass dein Instagram-Account nicht gesperrt oder eingeschränkt ist

## Rechtliche Hinweise
Bitte beachte, dass du nur Inhalte herunterladen solltest, für die du die entsprechenden Rechte besitzt oder deren Download ausdrücklich erlaubt ist. Respektiere die Urheberrechte und Nutzungsbedingungen von Instagram.