import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const initialDelay = 400;
const delayFactor = 100;

export function calculateInDelay(i: number, even: boolean, out?: boolean) {
	return {
		delay:
			Math.abs((even ? 1 : 2) - i) * delayFactor +
			(even ? delayFactor : 0) +
			(out ? 0 : initialDelay)
	};
}

export function calculateOutDelay(i: number, even: boolean, out?: boolean) {
	return {
		delay:
			Math.abs((even ? 1 : 2) - i) * delayFactor +
			(even ? delayFactor : 0) +
			(out ? 0 : initialDelay)
	};
}

// export function customFade(node: Element, { delay = 0, duration = 400 } = {}) {
// 	const o = +getComputedStyle(node).opacity;
// 	return {
// 		delay,
// 		duration,
// 		easing: (t: number) => t,
// 		css: (t: number) => (t === 0 ? `display: none` : `display: flex`)
// 	};
// }
