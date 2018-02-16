
function factorial(){
	var result = 1;
	var inputFact = document.getElementById("factIpt").value;
	for (var i = 1; i <= inputFact; i++) {
		result = result * i;
	};

	document.getElementById("factorialOutput").innerHTML = 'Factorial of ' + inputFact+ ' is ' + result;
}

