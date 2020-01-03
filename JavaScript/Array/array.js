function printReverse(array) {
	for(i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}

function isUniform(array) {
	// var count = 0;
	// for(i = 0; i < array.length-1; i++) {
	// 	if(array[i] === array[i+1]) {
	// 		count++;
	// 	}
	// }

	// if(count === array.length-1) {
	// 	return true;
	// }
	var first = array[0];
	for(i = 1; i < array.length; i++) {
		if(array[i] != first) {
			return false;
		}
	}
	return false;
}

function sumArray(array) {
	var total = 0;
	array.forEach(function (element) {
		total = total + element;
	})
	console.log(total);
}

function max(array) {
	var max = array[0];
	array.forEach(function (element) {
		if(element > max) {
			max = element;
		}
	})
}