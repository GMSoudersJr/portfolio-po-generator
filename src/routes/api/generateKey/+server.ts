import {exportCryptoKey, generateCryptoKey} from "$lib/cryption";
import {json} from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ setHeaders }) => {
	const cryptoKey = await generateCryptoKey();
	const exportedKey = await exportCryptoKey(cryptoKey);
	setHeaders({
		'Content-Disposition': 'attachment; filename="yourSecretKey.jwk" ',
		'Content-Type': 'application/json'
	})
	return json(exportedKey);
}
