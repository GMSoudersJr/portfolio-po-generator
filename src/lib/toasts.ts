import {goto} from "$app/navigation";
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
		duration: 5000,
		showProgress: true,
		placement: 'bottom-right',
		type: typeString,
		theme: "dark",
		onClick: async () => {
			toasts.clearAll();
			showToast('info', 'Undoing deletion','');
			const response = await fetch('/api/payees/undoDelete', {
				method: 'POST',
				body: JSON.stringify(payeeToUnDelete),
			});
			const success = await response.json();
			if (success) {
				toasts.clearAll();
				goto('/payees/', { invalidateAll: true });
				showToast('success', 'Restored', `Payee ${payeeToUnDelete?.beneficiaryName}`)
			} else {
				showToast('error', 'Error', `Failed to undo deletion`)
			}
		},
		onRemove: () => {},
	});
};
