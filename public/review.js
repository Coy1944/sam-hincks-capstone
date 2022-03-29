
const form = document.querySelector('#review-form');




function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The Email has been Submitted.');
}




form.addEventListener('submit', handleSubmit);