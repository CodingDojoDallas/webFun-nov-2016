function arrayRemoveRange(arr, start, end){
	var index = 0;
	for(var i = 0; i < arr.length; i++){
		if(i < start || i > end){
			arr[index] = arr[i];
			index++;
		}
	}
	arr.length = index;
	return arr;
}

var result = arrayRemoveRange([0,1,2,3,4,5,6,7,8,9],3,5);
console.log(result);