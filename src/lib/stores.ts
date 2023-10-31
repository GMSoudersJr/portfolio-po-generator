import { writable } from "svelte/store";

function createNumberOfPOS() {
	const { subscribe, set, update } = writable(1);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => {
			if (n == 1) {
				return 1
			} else {
				return n - 1
			}
		}),
		reset: () => set(1)
	}
}

export const numberOfProductsOrServices = createNumberOfPOS();
export const numberOfPOS = createNumberOfPOS();
export const cryptionKeyFileName = writable("");
