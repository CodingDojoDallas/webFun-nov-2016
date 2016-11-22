function arrayZipIt(arr1, arr2){
	var output = [];
	for(var i = 0; i < Math.max(arr1.length, arr2.length); i++){
		if(arr1[i]){
			output.push(arr1[i]);
		}
		if(arr2[i]){
			output.push(arr2[i]);
		}
	}
	return output;
}

var result = arrayZipIt([1,3,5,7,9], [2,4,6,8])
console.log(result);