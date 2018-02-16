
function primeSeries(){
	var result = [];
	var input = document.getElementById("primeIpt").value;
	for (var i=2; i<=input; i++){
		if ( input%i != 0 ){
			result.push(i);
		}
	}

	document.getElementById("primeOutput").innerHTML = result;
}
