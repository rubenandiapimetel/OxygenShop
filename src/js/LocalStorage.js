
/* localStorage.clear();
 */

const currencySelected = ()=>{
	let currency = document.getElementById("currency").value || 0;
	let response = fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/' +currency+ '/usd.json'
	)
	.then((response) => response.json())
	.then((data) => {
		cambiarValor(data);
	});

}

function cambiarValor(data){
	let currency = document.getElementById("currency").value || 0;
	if(currency = 'eur')
	currency = '€';
	if(currency = 'usd')
	currency = '$'
	if(currency = 'gbp')
	currency = '£'
	console.log(data);
	document.getElementById("basic").innerHTML =currency +(Math.round(0*(data.usd)));
	document.getElementById("professional").innerHTML =currency+ (Math.round(20*(data.usd)));
	document.getElementById("premiun").innerHTML =currency +(Math.round(60*(data.usd)));
	console.log(60*(data.usd));
}
