let fetchPost = () =>{
	let name = document.getElementById('inputname').value;
	let email = document.getElementById('inputemail').value;
	let data = new Object();
	data.name ="name";
	data.email = "email";
	console.log(data); //datos enviados
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