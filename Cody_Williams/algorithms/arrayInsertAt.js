//Give array, index, and additional value
//insert the value into the array at the given index

function arrayInsertAt(arr, val, idx){
	for(let i = arr.length; i > idx; i--){
		arr[i] = arr[i - 1];
	}
	arr[idx] = val;
	return arr;
}

console.log(arrayInsertAt([1,2,3], 0, 0));