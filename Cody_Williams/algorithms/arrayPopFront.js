//Given array, remove and return the value
//at the beginning of the array

function arrayPopFront(arr){
	var length = arr.length;
	var output = arr[0];
	for(let i = 0; i < length - 1; i++){
		arr[i] = arr[i + 1];
	}
	arr.length = length - 1;
	return output;
}
arr = [0,1,2,3,4]
console.log(arrayPopFront(arr));
console.log(arr);
