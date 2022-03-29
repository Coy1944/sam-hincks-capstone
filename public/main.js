console.log("js loaded")



// var msg = 'Sign up to recieve our newsletter for 20% off!';
// function updateMessage() {
//     var el = document.getElementById('message');
//     el.textContent = msg;
// }
// updateMessage();


const form = document.querySelector('#newsletter-form');




function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The Email has been Submitted.');
}

$.ajax({url: "http://localhost:8080/tshirt", success: function(result){
    console.log(result);
  }});

// 
// form.addEventListener('submit', handleSubmit);
