let fetchPost = () =>{
	let name = document.getElementById('inputname').value;
	let email = document.getElementById('inputemail').value;
	let popup_email =  document.getElementById('inputpopup').value;
	console.log(popup_email)
	let data = new Object();
	if(popup_email != "")
	data.popup_email = popup_email;
	if( name != "")
	data.name =name;
	if ( email != "")
	data.email = email;
	console.log(data.popup_email); //datos enviados
	fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify(data),
	 headers: {
	'Content-type': 'application/json; charset=UTF-8',
},
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}