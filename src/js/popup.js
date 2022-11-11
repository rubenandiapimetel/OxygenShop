const modal = () =>{
		const openp = document.querySelector("#popup");
		const closep = document.querySelector("#closepopup");
		openp.showModal();
		closep.addEventListener("click", () => {
			openp.close();
		});
}

window.onload = waitter;
//ta sin temrinarrr