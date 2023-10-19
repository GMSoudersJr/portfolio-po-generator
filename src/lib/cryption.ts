function getDataEncoding(data: string | undefined) {
	let enc = new TextEncoder();
	return enc.encode(data);
};

export async function encryptTheData(key: CryptoKey, data: string | undefined) {
	let encoded = getDataEncoding(data);
	let iv = crypto.getRandomValues((new Uint8Array(12)));
	let cipherText = await crypto.subtle.encrypt(
		{
			name: "AES-GCM",
			iv: iv
		},
		key,
		encoded
	);

	let buffer = new Uint8Array(cipherText, 0, 5);

	return {
		buffer,
		cipherText,
		iv
	};
};

export async function exportCryptoKey(key: CryptoKey) {
	const exported = await crypto.subtle.exportKey("jwk", key);
	console.log("EXPORTING KEY", exported)
	return exported;
}

export async function generateCryptoKey() {
	const key = await crypto.subtle.generateKey(
		{
			name: "AES-GCM",
			length: 256,
		}, 
		true,
		["encrypt", "decrypt"]
	);

	console.log("Generating crypto key", key);

	return key
};

export async function decryptTheData(key: CryptoKey, data: ArrayBuffer, iv: ArrayBuffer) {
	let decrypted = await crypto.subtle.decrypt(
		{
			name: "AES-GCM",
			iv: iv
		},
		key,
		data
	);

	let dec = new TextDecoder();
	let decryptedText = dec.decode(decrypted);

	return decryptedText;
};

