let popup_on = false;
if(localStorage.getItem("session") != ""){
	let saved = localStorage.getItem("session");
	console.log(saved + " = Sesion guardada");
	/* localStorage.removeItem('session'); */
	/* saved = localStorage.getItem("session");
	console.log(saved); */
	popup_on = true;
}

let scrollf = () => {
	let scrollclass = document.getElementById('scrollclass');
	let height = document.documentElement.scrollHeight;
	let current_margin = document.documentElement.clientHeight;
	let actual_margin = height - current_margin;
	let current_pos = Math.round((document.documentElement.scrollTop * 1000)/ actual_margin);
	console.log("current pos" + current_pos);
	console.log("srcolltop " + document.documentElement.scrollTop);
	console.log("heigth " + height);
	console.log("current margin" + current_margin);
	console.log(Math.round(document.documentElement.scrollTop));
	scrollclass.style.background = `linear-gradient(90deg, #000000 ${current_pos / 10}%, #d7d7d7 0%)`;
	if((height * 0.25) < (current_margin + document.documentElement.scrollTop)) {	
		if(popup_on == false){//25percentofpage
		modal();
		popup_on = true;
		}
	}
	doit();
};

let on = () => {
	scrollf();
	let ret = document.getElementById('return');
	if(document.documentElement.scrollTop > 1)
	{
	ret.style.display = 'block';
	}else{
		ret.style.display = 'none';
	}
}

function retop(){
	
	if (document.documentElement.scrollTop > 0){
		let x = document.documentElement.scrollTop;
		window.requestAnimationFrame(retop);
		window.scrollTo(0, x - 100);
	}
}

window.onscroll = on;

