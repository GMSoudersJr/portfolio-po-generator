import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET, DECRYPT_SECRET, ENCRYPT_SECRET } from '$env/static/private';

import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const accessToken = event.cookies.get('accessToken');
	const cryptionToken = event.cookies.get('cryptionToken');

	if (cryptionToken) {
		jwt.verify(cryptionToken, ENCRYPT_SECRET, (error, payload) => {
			if (error) {
				console.log("Decryption error");
			}
			if (payload) {
				console.log("THE KEY IS HERE", payload);
				event.locals.key = payload.key
			}
		})
	};

	if ( accessToken ) {
		jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (error, payload) => {
			if (error) {
				throw redirect(302, '/login');
			}
			if (payload) {
				event.locals.user = {
					name: payload.username,
					firstName: payload.firstName,
				}
			}
		})
	} else {
		event.locals.user = undefined;
	}

	if ( event.url.pathname.startsWith('/whoLovesYou') ) {
		return new Response('You know who')
	}

	if ( event.url.pathname.startsWith('/purchaseOrders') ) {
		if (!event.locals.user) {
			throw redirect(302, '/login')
		}
	}

	if ( event.url.pathname.startsWith('/payees') ) {
		if (!event.locals.user) {
			throw redirect(302, '/login')
		}
	}

	const route = event.url;
	let start = performance.now();
	const response = await resolve(event);
	let end = performance.now();
	let responseTime = end - start;
	console.log(`HOOKS PERFORMANCE - Response from ${route} took ${responseTime.toFixed(2)} ms`);
	console.log(event.locals);
	return response;
}
