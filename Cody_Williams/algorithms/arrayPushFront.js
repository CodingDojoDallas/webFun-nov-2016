//given an array and an additional value
//insert this value at the beginning of the array

function arrayPushFront(arr, val){
	for(let i = arr.length; i > 0; i--){
		arr[i] = arr[i - 1];
	}
	arr[0] = val;
	return arr;
}

console.log(arrayPushFront([1,2,3,4], 0))