//given array and an index into array
//remove and return the array value at the index

function arrayRemoveAt(arr, idx){
	var output = arr[idx];
	for(let i = idx; i < arr.length - 1; i++){
		arr[i] = arr[i + 1];
	}
	arr.length = arr.length - 1;
	return output;
}

var arr = [0,1,2,3,4];
console.log(arrayRemoveAt(arr, 2));
console.log(arr);