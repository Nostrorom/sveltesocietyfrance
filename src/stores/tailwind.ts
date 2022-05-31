import { readable, type Readable } from 'svelte/store';

const tailwindColors: string[] = [
	'red',
	'orange',
	'amber',
	'yellow',
	'lime',
	'green',
	'emerald',
	'teal',
	'cyan',
	'sky',
	'blue',
	'indigo',
	'violet',
	'purple',
	'fuchsia',
	'pink',
	'rose',
	'slate',
	'grey',
	'gray',
	'zinc',
	'neutral',
	'stone'
];

const tailwindIntensities: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const tailwindSizes: number[] = [
	0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44,
	48, 52, 56, 60, 64, 72, 80, 96
];

type Indexer<Type> = { [key: string]: Type };

type NestedIndexer<Type> = Indexer<Indexer<Type>>;

const createColorizer = (variant: string): NestedIndexer<string> => {
	return tailwindColors.reduce(
		(indexer: NestedIndexer<string>, color: string): NestedIndexer<string> => {
			indexer[color] = tailwindIntensities.reduce(
				(subindexer: Indexer<string>, intensity: number): Indexer<string> => {
					subindexer[intensity] = `${variant}-${color}-${intensity}`;
					return subindexer;
				},
				{}
			);
			return indexer;
		},
		{}
	);
};

const createSizer = (variant: string | string[]): Indexer<string> => {
	return tailwindSizes.reduce((indexer: Indexer<string>, size: number): Indexer<string> => {
		indexer[size] =
			typeof variant === 'string'
				? `${variant}-${size}`
				: `${variant[0]}-${size} ${variant[1]}-${size}`;
		return indexer;
	}, {});
};


export const twText: Readable<NestedIndexer<string>> = readable(createColorizer('text'));

export const twBg: Readable<NestedIndexer<string>> = readable(createColorizer('bg'));

export const twH: Readable<Indexer<string>> = readable(createSizer('h'));

export const twW: Readable<Indexer<string>> = readable(createSizer('w'));

export const twS: Readable<Indexer<string>> = readable(createSizer(['h', 'w']));
