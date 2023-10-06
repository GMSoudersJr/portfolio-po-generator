import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '$env/static/private';

import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const accessToken = event.cookies.get('accessToken');

	if ( accessToken ) {
		jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (error, payload) => {
			if (error) {
				throw redirect(302, '/login');
			}
			if (payload) {
				event.locals.user = {
					name: payload.username,
					firstName: payload.firstName,
					redirectAfterLogin: event.url.pathname,
				}
			}
		})
	}

	if ( event.url.pathname.startsWith('/whoLovesYou') ) {
		return new Response('You know who')
	}


	if ( event.url.pathname.startsWith('/purchaseOrders') ) {
		console.log("HOOKS PURCHASE ORDERS pathname", event.url.pathname);
		if (!event.locals.user) {
			throw redirect(302, '/login')
		}
	}

	if ( event.url.pathname.startsWith('/payees') ) {
		console.log("HOOKS PAYEES pathname", event.url.pathname);
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
	console.log("HOOKS PATHNAME", event.url.pathname)

	return response;
}
