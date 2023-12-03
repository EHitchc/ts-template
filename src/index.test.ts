import { main, mergeSort, quickSort } from '.';

test('main', () => {
	const consoleSpy = jest.spyOn(console, 'log');
	main();

	expect(consoleSpy).toHaveBeenCalledWith('Hello World!');
});

describe('Merge sort', () => {
	it('Merge sort with an empty array', () => {
		const input: number[] = [];
		const expectedOutput: number[] = [];
		const result = mergeSort(input);
		expect(result).toEqual(expectedOutput);
	});

	it('Merge sort with an array of one element', () => {
		const input = [5];
		const expectedOutput = [5];
		const result = mergeSort(input);
		expect(result).toEqual(expectedOutput);
	});

	it('Merge sort with an array in ascending order', () => {
		const input = [1, 2, 3, 4, 5];
		const expectedOutput = [1, 2, 3, 4, 5];
		const result = mergeSort(input);
		expect(result).toEqual(expectedOutput);
	});

	it('Merge sort with an array in descending order', () => {
		const input = [5, 4, 3, 2, 1];
		const expectedOutput = [1, 2, 3, 4, 5];
		const result = mergeSort(input);
		expect(result).toEqual(expectedOutput);
	});

	it('Merge sort with an array in random order', () => {
		const input = [3, 1, 4, 2, 5];
		const expectedOutput = [1, 2, 3, 4, 5];
		const result = mergeSort(input);
		expect(result).toEqual(expectedOutput);
	});

	it('Merge sort with an array in random order with some duplicates', () => {
		const input = [3, 1, 4, 3, 2, 2, 5];
		const expectedOutput = [1, 2, 2, 3, 3, 4, 5];
		const result = mergeSort(input);
		expect(result).toEqual(expectedOutput);
	});
});

describe('Quick Sort', () => {
	it('Quick sort with an empty array', () => {
		const input: number[] = [];
		const expectedOutput: number[] = [];
		const result = quickSort(input);
		expect(result).toEqual(expectedOutput);
	});

	it('Quick sort with an array of one element', () => {
		const input = [5];
		const expectedOutput = [5];
		const result = quickSort(input);
		expect(result).toEqual(expectedOutput);
	});

	it('Quick sort with an array in ascending order', () => {
		const input = [1, 2, 3, 4, 5];
		const expectedOutput = [1, 2, 3, 4, 5];
		const result = quickSort(input);
		expect(result).toEqual(expectedOutput);
	});

	it('Quick sort with an array in descending order', () => {
		const input = [5, 4, 3, 2, 1];
		const expectedOutput = [1, 2, 3, 4, 5];
		const result = quickSort(input);
		expect(result).toEqual(expectedOutput);
	});

	it('Quick sort with an array in random order', () => {
		const input = [3, 1, 4, 2, 5];
		const expectedOutput = [1, 2, 3, 4, 5];
		const result = quickSort(input);
		expect(result).toEqual(expectedOutput);
	});

	it('Quick sort with an array in random order with some duplicates', () => {
		const input = [3, 1, 4, 3, 2, 2, 5];
		const expectedOutput = [1, 2, 2, 3, 3, 4, 5];
		const result = quickSort(input);
		expect(result).toEqual(expectedOutput);
	});
});
