//given an array of comparable values move 
//the lowest element to the arrays front
function arrayMinToFront(arr){
	var length = arr.length;
	var minIndex;
	var min = arr[0];
	var temp;
	for(let i = 1; i < length; i++){
		if(arr[i] < min){
			min = arr[i];
			minIndex = i;
		}
	}
	for(let i = minIndex; i > 0; i--){
		temp = arr[i];
		arr[i] = arr[i - 1];
		arr[i - 1] = temp;
	}
	return arr;
}

console.log(arrayMinToFront([4,2,1,3,5]));