



// var msg = 'Sign up to recieve our newsletter for 20% off!';
// function updateMessage() {
//     var el = document.getElementById('message');
//     el.textContent = msg;
// }
// updateMessage();


const form = document.querySelector('#newsletter-form');
const form1 = document.querySelector('#review-form');



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The Email has been Submitted.');
}

function handleSubmit1(evt) {
	evt.preventDefault();
	
	alert('The Email has been Submitted.');
}



form.addEventListener('submit', handleSubmit);
form1.addEventListener('submit', handleSubmit1);