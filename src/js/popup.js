const modal = () =>{
		const openp = document.querySelector("#popup");
		const closep = document.querySelector("#closepopup");
		openp.showModal();
		closep.addEventListener("click", () => {
			openp.close();
			localStorage.setItem("session","on");
		});
		popup_on = true;
		
}

const comprobacion = ()=>{
	let height = document.documentElement.scrollHeight;
	current_margin = document.documentElement.clientHeight;
	if (popup_on == false && ((height * 0.25) > (current_margin + document.documentElement.scrollTop))){
		modal();
	}
}



const doit = ()=>{
	let height = document.documentElement.scrollHeight;
	current_margin = document.documentElement.clientHeight;
	if (popup_on == false && ((height * 0.25) > (current_margin + document.documentElement.scrollTop))){
	window.setTimeout('comprobacion()',5000);
	}
}