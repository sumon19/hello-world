window.onload=function() {
//var mail=document.getElementById("ptxt");
//var tx=documnet.getElementById("txt");
document.getElementById("bt").onclick=subscibe;
}
//var mail=document.getElementById("ptxt");
//mail="subscibed";
//var tx=documnet.getElementById("txt");
function subscibe() {
	var mail=document.getElementById('ptxt');
	var tx = document.getElementById('txt');
     // var t= tx.value;
	
	
	if(tx.value.length > 0 )
	{
	alert("your g-mail is subscibed");
	bt.value="subscibed";
	
	}
	else {
	alert("plese enter your g-mail");
	bt.value="subscibe";
	
	}
	
	
	

	
	
	
}
	
