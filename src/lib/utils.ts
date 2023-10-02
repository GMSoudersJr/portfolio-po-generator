function formatString(stringToBeFormatted: string): string {
	if (stringToBeFormatted.length < 2) {
		return `0${stringToBeFormatted}`
	} else {
		return stringToBeFormatted
	}
};

export function todayDateString(): string | number | null | undefined {
	let result: string = "";
	const date = new Date();
	const year: string = date.getFullYear().toString();
	const month: string = (date.getMonth() + 1).toString();
	const day: string = date.getDate().toString();
	result += year;
	result += '-';
	result += formatString(month);
	result += '-';
	result += formatString(day);
	return result;
};
