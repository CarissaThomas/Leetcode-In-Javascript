

function doSearch(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    
    while(max > min){ //while the max is larger than min 
        guess = Math.floor((min + max) / 2); // the average

        if(array[guess] === targetValue){
            return guess;
        } else if (array[guess] < targetValue) { //if the guess is below our target
            min = guess + 1;// guess was too low increment it up 
        } else {
            max = guess - 1;
        }
    }

	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);