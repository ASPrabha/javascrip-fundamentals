
function palindrome(){
	var input = document.getElementById('palindrome').value;
	revInput = reverseString(input);

	if(input.toLowerCase() === revInput.toLowerCase()){
		document.getElementById("palindromeOutput").innerHTML = "Given String is a Palindrome";
	} else{
		document.getElementById("palindromeOutput").innerHTML = "Given String is NOT a Palindrome";
	}
}


function reverseString(str) {
    var splitString = str.split('').reverse().join(""); 
    
    return splitString; 
}