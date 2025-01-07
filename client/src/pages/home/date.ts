export const calculateMonthDiff = (initial: Date) => {
    let curr = new Date();
    let diff = (initial.getTime() - curr.getTime()) / 1000
    diff /= (60 * 60 * 24 * 7 * 4)
    return Math.abs(Math.round(diff));
}