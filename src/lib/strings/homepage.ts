export const navigationHeading = `Navigation 🧭`;
export const navigationBullets = [
	`The navbar navigates you to a page that shows all entries for that
		selection.`,
	`To add new <strong><em>Payees</em></strong> and <em><strong>Purchase
		Orders</strong></em> click the "+" button.`
];
export const cryptionHeading = `Cryption Keys 🔐`;
export const cryptionBullets = [
	`Dialogs will appear to guide you through the process.`,
	`There are navigation options in the bottom right corner.`,
	`The same key can be reused to encrypt and decrypt data.`,
];
export const payeeFormHeading = `Payee Form 📝`;
export const payeeFormBullets = [
	`You must have an imported key in order to create a payee.`,
	`You will be alerted about the status of your imported key.`,
	`The fields you asked for are required.`,
	`A form <strong>cannot </strong>be submitted without all required fields.`,
	`Sensitive data will be encrypted.`,
	`<strong>Do not click the Submit button more than once!</strong>`,
	`The form will reset upon successful submission.`,
	`After submitting payees, navigate to Purchase Orders!`,
];
export const poFormHeading = `Purchase Order Form 📝`;
export const poFormBullets = [
	`You must have an imported key in order to create a PO.`,
	`You will be alerted about the status of your imported key.`,
	`There is a grid of cards showing all payees 📇 to the right of the form.`,
	`<strong>Payee Name</strong> is a search input. It will filter the payee
		cards.`,
	`<strong>YOU NEED TO CLICK A CARD</strong> for its data to auto-populate
		necessary fields.`,
	`<strong>Subtotal</strong> and <strong>Tax Rate</strong> are
		<em>disabled</em>.  You cannot update them!`,
	`<strong>Due Date</strong> and <strong>Created Date</strong> will be formatted
		server-side.`,
	`<strong>PO#</strong> will be auto-generated with your <strong>Summary</strong>
		input, but remains editable.`,
	`After submission, you will be redirected to your auto-completed PO.`,
];
export const pdfGenerationHeading = `PDF Generation 📄`;
export const pdfGenerationBullets = [
	`Review the PO`,
	`Click the "PDF-it" button to download the pdf!`,
];
export const cryptographicKeyHeading = `JSON Web Keys (JWK) for security`;
export const cryptographicKeyBullets = [
	`Once generated, your browser will download it to your Downloads folder.`,
	`Your key can be used and discarded of once you are finished using the site.`,
	`You will need to import it into the browser so it can be used.`,
	`It will not affect your system.`,
	`It will be used for only this site.`,
	`There is no sensitive data stored in the JWK file.`,
	`When you logout, the browser will remove any mention of your JWK from its memory.`,
	`If you will only visit once, feel free to delete the file from your Downloads folder.`,
];
