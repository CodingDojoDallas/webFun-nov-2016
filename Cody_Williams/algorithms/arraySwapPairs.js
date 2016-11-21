//swap positions of successive pairs 
//of values of a given array

function arraySwapPairs(arr){
	var temp;
	var length = arr.length;
	for(let i = 0; i < length - 1; i += 2){
		temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}
	return arr;
}

console.log(arraySwapPairs([1,2,3,4,5]));
console.log(arraySwapPairs([1,2,3,4,5,6]));
