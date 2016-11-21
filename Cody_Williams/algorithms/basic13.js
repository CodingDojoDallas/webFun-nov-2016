function printOneToTwoHundredFiftyFive(){
	for(var i = 1; i < 256; i++){
		console.log(i);
	}
}

function printAlt(start, stop){
	for(var i = start; i < stop + 1; i++){
		console.log(i);
	}
}

// printOneToTwoHundredFiftyFive();

// printAlt(1, 255);

function printOdds(start, stop){
	for(var i = start; i < stop + 1; i++){
		// check if i is odd
		if(i % 2 != 0){
			console.log(i);
		}
	}
}

// printOdds(1, 255);

function sumRange(start, stop){
	var sum = 0;
	for(var i = start; i < stop + 1; i++){
		sum += i;
		console.log(i, sum)
	}
}

// sumRange(0, 255);

function iterateAndPrintArray(arr){
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}

// iterateAndPrintArray([1,2,3,4,5]);

function findAndPrintMax(arr){
	//start by setting max equal to the first element in the array
	var max = arr[0];
	//iterate through array
	for(var i = 0; i < arr.length; i++){
		//check to see if the current element is greater than max
		//if so set max equal to the current element
		if(arr[i] > max){
			max = arr[i];
		}
	}
	console.log(max);
}

// findAndPrintMax([1,2,3,4,5]);

function getAndPrintAvg(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	console.log(sum / arr.length);
}

// getAndPrintAvg([1,2,3,4,5]);

function arrayWithOdds(start, stop){
	//create an array to store our odd integers
	var output = [];
	//loop from start to stop
	for(var i = start; i < stop + 1; i++){
		//check if i is odd
		//if so push to our output array
		if(i % 2 != 0){
			output.push(i);
		}
	}
	//after the for loop is done return the output array
	return output;
}
 
// arrayWithOdds(1, 255);

function squareTheValues(arr){
	//iterate through the input array
	for(var i = 0; i < arr.length; i++){
		//replace each element with the value of the element squared
		arr[i] = arr[i] * arr[i];
	}
	//return the input array
	return arr;
}

// squareTheValues([1,2,3,4,5]);

function greaterThanY(arr, y){
	//initialize a count variable to track how many values are greater than input y
	var count = 0;
	// iterate through the array
	for(var i = 0; i < arr.length; i++){
		//check if the current element is greater than y
		//if so increase count by one
		if(arr[i] > y){
			//this is the same as count = count + i, or count += 1
			count++;
		}
	}
	return count;
}

// greaterThanY([1,2,3,4,5], 3);

function zeroOutNegatives(arr){
	// iterate through the array
	for(var i = 0; i < arr.length; i++){
		//check if the current element is less than 0
		//if so set the current element equal to 0
		if(arr[i] < 0){
			arr[i] = 0;
		}
	}
	//return the input arr
	return arr;
}

// zeroOutNegatives([-1,2,-3,4,5]);

function maxMinAvg(arr){
	//set min and max equal to the first element of the array
	var max = arr[0];
	var min = arr[0];
	//set sum equal to 0;
	var sum = 0;
	//iterate through the array
	for(var i = 0; i < arr.length; i++){
		//check to see if the current element is greater than max
		//if so set max equal to the current element
		if(arr[i] > max){
			max = arr[i];
		}
		//check to see if the current element is less than min
		//if so set min equal to the current element
		if(arr[i] < min){
			min = arr[i];
		}
		//no matter what increase sum by the current element
		sum += arr[i];
	}
	//calculate the average and save it in a variable
	var avg = sum / arr.length;
	//print min, max, avg
	console.log(min, max, avg);
}

// maxMinAvg([1,2,3,4,5]);

function shiftArrayValues(arr){
	//iterate through the element stopping at the next to last element (note i < arr.length - 1)
	for(var i = 0; i < arr.length - 1; i++){
		//set the current element equal to the element on it's right
		arr[i] = arr[i + 1];
	}
	//set the last element in the array equal to 0
	arr[arr.length - 1] = 0;
	//return the input array
	return arr;
}

// shiftArrayValues([1,2,3,4,5]);

function numberToString(arr){
	//iterate through the array
	for(var i = 0; i < arr.length; i++){
		//check to see if the current element is less than 0
		//if so set it equal to the string 'Dojo'
		if(arr[i] < 0){
			arr[i] = 'Dojo';
		}
	}
	//return the input array
	return arr;
}

// numberToString([-1,2-3,4,5]);
