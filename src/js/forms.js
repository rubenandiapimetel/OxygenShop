var verifyname = () =>{
	const name = document.getElementById('inputname').value;
	let color = document.getElementById('color_name');
	console.log(name);
	if(name.length < 3 || name.length > 100)
		color.style.borderBottom = 	"1px solid #ff0000";
	else
		color.style.borderBottom = 	"1px solid #9a9595";
	verifyemail();
}
var verifyemail = () =>{
	let email = document.getElementById("inputemail").value;
	let color = document.getElementById('color_email')
	console.log(email)
	for(var i=0; i< email.length ; i++){
		c = email.charAt(i);
		if(c == "@"){
			i++;
			for(var k = i; k< email.length ; k++){
				if(email.charAt(k) == "."){
					k++;
					if(email.charAt(++k)){
					var x = true;
					color.style.borderBottom = 	"1px solid #9a9595";
					break;
					}
				}
			}
		}
	}
	if(!x){
		color.style.borderBottom = 	"1px solid #ff0000";
	}
}
	
