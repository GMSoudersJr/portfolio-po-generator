# [Purchase Order Generator](https://portfolio-po-generator.vercel.app "Gerald's Purchase Order Generator")

## Overview

This web-app allows users to create "payee" profiles and use them to then create purchase orders that can be downloaded as PDFs.

**LIVE LINK:** https://portfolio-po-generator.vercel.app

## Instructions for use
- Login with username and password: guest
- The app utilizes JSON Web Keys (JWK) to encrypt and decrypt hypothetical "sensitive" data
  - **DO NOT ENTER YOUR PERSONAL INFORMATION**
  - The app can generate and download a JWK for you.
     - It will be in your Downloads folder.
  - You will then need to import your JWK into the app.
  - The JWK is used as a cryption key to encrypt personal information before it is sent to the database
  - The same JWK is needed to decrypt that data when it is retrieved from the database later
  - If a different JWK is detected, you will asked to import a different one
- Fill out Payee forms and then head over to Purchase Orders.
- Click a Payee name from list of buttons on the right of the form.
- Fill out the form and then submit.
- You will be redirected to a page with the Purchase Order auto generated from the information you provided.
- Review the info and then click PDF-it to download your PDF.

## Running the Project
This project was built with Svelte and uses a few dependencies.
To run a version locally on your own machine

Optional:
```bash
#make a directory and change into it:
mkdir newDirectory && cd newDirectory
```

Required:
```bash
#clone the repository into the current directory over SSH:
git clone git@github.com:GMSoudersJr/portfolio-po-generator.git
#change into newly cloned directory:
cd portfolio-po-generator
#run this command to install all dependencies:
npm install
```

for a local development server, run:
```bash
npm run dev
```

run this commmand to build:

```bash
npm run build
```

## Dependencies
- [Svelte](https://svelte.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TSlib](https://www.npmjs.com/package/tslib)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [html2canvas](https://html2canvas.hertzen.com/)
- [MongoDB](https://www.mongodb.com/)
- [pdfMake](http://pdfmake.org/#/)
- [svelte-toasts](https://www.npmjs.com/package/svelte-toasts)
