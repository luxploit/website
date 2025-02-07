export enum ProgType {
	Lang_C,
	Lang_CSharp,
	Lang_TypeScript,
	Lang_Golang,
	Platform_DotNet,
	License_BSD,
	License_MIT,
	OS_DebianLinux,
}

export interface ProgHighlightOptions {
	type: ProgType;
	text: string;
}

export const ProgHighlight = (options: ProgHighlightOptions) => {
	let progMap = [
		'#649ad2', // Lang_C
		'#196d1d', // Lang_CSharp
		'#377cc8', // Lang_TypeScript
		'#00a7d4', // Lang_Golang
		'#360092', // Platform_DotNet
		'#a11616', // License_BSD
		'#1966ff', // License_MIT
		'#a80030', // OS_DebianLinux
	];

	return <span style={`color: ${progMap[options.type]}`}>{options.text}</span>;
};
