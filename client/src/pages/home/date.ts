export const calculateMonthDiff = (initial: Date) => {
	let curr = new Date();
	let diff = (curr.getTime() - initial.getTime()) / 1000;
	diff /= 2629746;
	return Math.abs(Math.floor(diff));
};
