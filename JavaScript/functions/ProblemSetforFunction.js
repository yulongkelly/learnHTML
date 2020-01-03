function isEven(int) {
	// if(int % 2 === 0) {
	// 	return true;
	// }
	// else {
	// 	return false;
	// }
	return int % 2 === 0;
}

function factorial(int) {
	if(int === 0) {
		return 1;
	}
	var factorial = 1;
	for(i = int; i <=1; i--) {
		factorial = factorial * i;
	}
	return factorial;
}

function kebabToSnake(str) {
	// var result = str;
	// var charArray = new Array(str.length);
	// for(i = 0; i <str.length; i++) {
	// 	charArray[i] = str.charAt(i);
	// }
	// for(i = 0; i <str.length; i++) {
	// 	if(charArray[i] === "-") {
	// 		charArray[i] = "_"
	// 	}
	// }
	// return charArray.toString();
	var newStr = str.replace(/-/g, "_");
	return newStr;
}

