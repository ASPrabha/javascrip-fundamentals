
function armstrong(){

	var arm=0,a,b,c,d,input;
	input=Number(document.getElementById("armIpt").value);
	
	temp=input;
	while(temp>0)
	{
		a=temp%10;
		temp=parseInt(temp/10);
		arm=arm+a*a*a;
	}
	if(arm==input)
	{
		document.getElementById("armOutput").innerHTML = "Armstrong Number";
	}
	else
	{
		document.getElementById("armOutput").innerHTML = "NOT a Armstrong Number";
	}

}