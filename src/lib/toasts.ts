import type {Document} from "mongodb";
import { toasts } from "svelte-toasts";
import type {ToastType} from 'svelte-toasts/types/common';

export const showToast = (
	typeString: ToastType,
	titleString: string,
	descriptionString: string,
) => {
	const toast = toasts.add({
		title: titleString,
		description: descriptionString,
		duration: 5000,
		showProgress: true,
		placement: 'bottom-right',
		type: typeString,
		theme: "dark",
		onClick: () => {},
		onRemove: () => {},
	});
};

export const showToastInvalidKey = (
	typeString: ToastType,
	titleString: string,
	descriptionString: string,
) => {
	toasts.clearAll();
	const invalidKeyDialog =
		document.getElementById("invalid-key-dialog") as HTMLDialogElement;
	const toast = toasts.add({
		title: titleString,
		description: descriptionString,
		duration: 0,
		showProgress: true,
		placement: 'bottom-right',
		type: typeString,
		theme: "dark",
		onClick: () => {
			toasts.clearAll();
			invalidKeyDialog.showModal();
		},
		onRemove: () => {
			toasts.clearAll();
			invalidKeyDialog.showModal();
		},
	});
};

export const showToastUndoDelete = (
	typeString: ToastType,
	titleString: string,
	descriptionString: string,
	payeeToUnDelete: Document | undefined
) => {
	toasts.clearAll();
	const toast = toasts.add({
		title: titleString,
		description: descriptionString,
		duration: 0,
		showProgress: true,
		placement: 'bottom-right',
		type: typeString,
		theme: "dark",
		onClick: () => {
			console.dir(payeeToUnDelete);
		},
		onRemove: () => {},
	});
};

