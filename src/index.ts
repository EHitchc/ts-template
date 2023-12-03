export function main() {
	console.log('Hello World!');
}

export const mergeSort = <T>(arr: T[]): T[] => {
	if (arr.length <= 1) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	const merge = (left: T[], right: T[]): T[] => {
		const result: T[] = [];
		let i = 0;
		let j = 0;

		while (i < left.length && j < right.length) {
			if (left[i] <= right[j]) {
				result.push(left[i]);
				i++;
			} else {
				result.push(right[j]);
				j++;
			}
		}

		return result.concat(left.slice(i)).concat(right.slice(j));
	};

	return merge(mergeSort(left), mergeSort(right));
};

export const quickSort = <T>(
	arr: T[],
	start: number = 0,
	end: number = arr.length - 1,
): T[] => {
	if (arr.length <= 1) {
		return arr;
	}

	const partition = <T>(
		arr: T[],
		leftIndex: number,
		rightIndex: number,
	): number => {
		const pivot = arr[rightIndex];
		let lowIndex = leftIndex - 1;

		for (let i = leftIndex; i < rightIndex; i++) {
			if (arr[i] < pivot) {
				lowIndex++;
				[arr[lowIndex], arr[i]] = [arr[i], arr[lowIndex]];
			}
		}

		lowIndex++;
		[arr[lowIndex], arr[rightIndex]] = [arr[rightIndex], arr[lowIndex]];

		return lowIndex;
	};

	if (start < end) {
		const pivotIndex = partition(arr, start, end);
		quickSort(arr, start, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, end);
	}

	return arr;
};
