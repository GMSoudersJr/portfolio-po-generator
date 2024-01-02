# [Purchase Order Generator](https://portfolio-po-generator.vercel.app "Gerald's Purchase Order Generator")

## Overview

This web-app allows users to create "payee" profiles and use them to then create purchase orders that can be downloaded as PDFs.

<img src="https://github.com/GMSoudersJr/portfolio-po-generator/assets/44438849/7e0c5e67-8e46-4032-932f-0a85bc08c939" alt="Home Page" width="185" />
<img src="https://github.com/GMSoudersJr/portfolio-po-generator/assets/44438849/838f76b2-ecb1-425a-8066-82c56890601e" alt="Key Dialog" width="185" />
<img src="https://github.com/GMSoudersJr/portfolio-po-generator/assets/44438849/7cb90e6e-a5f8-4c2d-adb3-2e841eab9fd1" alt="Payee Form" width="185" />
<img src="https://github.com/GMSoudersJr/portfolio-po-generator/assets/44438849/1cde6d48-cbca-4201-b455-458894054735" alt="PO Form" width="185" />
<img src="https://github.com/GMSoudersJr/portfolio-po-generator/assets/44438849/3931f824-84de-48b6-90d9-5ea611e7a0aa" alt="Purchase Order" width="185" />
<img src="https://github.com/GMSoudersJr/portfolio-po-generator/assets/44438849/f2926460-6bbd-4266-9dc5-3ade14c66b16" alt="Encrypted User Data" width="185" />

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
