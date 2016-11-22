function arrayShuffle(arr){
	var temp;
	var random;
	for(var i = 0; i < arr.length; i++){
		random = Math.floor(Math.random() * arr.length);
		temp = arr[i];
		arr[i] = arr[random];
		arr[random] = temp;
	}
	return arr;
}

var result = arrayShuffle([1,2,3,4,5])
console.log(result);