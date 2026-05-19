# Public Assets Directory

This folder contains static assets that will be served at the root path `/` of your application.

## Uploading Your CV

To make your CV available for download on the portfolio:
1. Save your CV as a PDF file.
2. Rename the file to **exactly** `cv.pdf`.
3. Place `cv.pdf` inside this `public` folder.
4. The "Download CV" button in the Hero section will now automatically work and download this file.

## Updating Project Links
To add new projects or update existing GitHub and Live Demo links:
1. Open `src/data/projectsData.js`.
2. Locate the `projectsData` array. To add a new project, copy an existing block `{ title: '...', ... }` and paste it at the end.
3. Update the `github` and `live` values with your actual URLs.

## Updating Social Links
To update your social links (GitHub, LinkedIn, WhatsApp, Email):
1. Open `src/data/socialsData.js`.
2. Update the URLs next to `github`, `linkedin`, `whatsapp`, and `email`.
