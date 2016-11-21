//given a sorted array, remove duplicate values
//because the array is sorted all dupes are grouped together


function arrayRemoveDupes(arr){
	//store the first element in the array to check for dupes
	var element = arr[0];
	//track the index where we'll move the next unique value
	//we need to start at index 1 bc the first value in the array
	//should always stay at position 0
	var index = 1;
	for(let i = 1; i < arr.length; i++){
		//check for the next unique value
		if(arr[i] != element){
			//update element so we can check for dupes, moving forward, on
			//the new unique value
			element = arr[i];
			//copy the new unique value to the index immediately
			//following the last unique value
			arr[index] = arr[i];
			//increase index by one so we're ready for the next unique value
			index++;
		}
	}
	//set arr.length to index, cutting off all the duplicate values
	arr.length = index;
	return arr;
}

var result = arrayRemoveDupes([2,2,2,3,3,3,4,4,5,6,6,7,8,8]);
console.log(result);