
let scrollf = () => {
	let scrollclass = document.getElementById('scrollclass');
	let height = document.documentElement.scrollHeight;
	let current_margin = document.documentElement.clientHeight;
	let actual_margin = height - current_margin;
	let current_pos = Math.round((document.documentElement.scrollTop * 1000)/ actual_margin);
	console.log(current_pos);
	console.log(Math.round(document.documentElement.scrollTop));
	scrollclass.style.background = `linear-gradient(90deg, #ff2c03 ${current_pos / 10}%, #d7d7d7 0%)`;
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
