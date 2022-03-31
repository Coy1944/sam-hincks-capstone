

console.log("js loaded")



const form = document.querySelector('#newsletter-form');
const recipeTitle = document.querySelector('#Recipe-Title');




function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The Email has been Submitted.');
}
$('.cont-recipe').attr("style", "display:none!important");
$('#get-special').on('click', function(){
    $.ajax({url: "http://localhost:8080/special", success: function(result){
        $('.cont-recipe').attr("style", "display:auto");
    console.log(result);
    // recipeTitle.innertext = result.recipeTitle;
    var titleHtml = "<h2>"+result.title+"</h2>"
    $("#recipe-title").html(titleHtml);
    var imageHtml = '<img src="'+result.image.src+'" alt="'+result.image.alt+'"  width="500px" height="auto"/>';
    $("#recipe-image").html(imageHtml);
    $('#description').html(result.description);
    var ingHtml = "";
     for(let i = 0; i < result.ingredients.length; i++) {
         ingHtml += '<li>'+result.ingredients[i]+'</li>';
     }
     $("#ingredients").html(ingHtml);
     var cookHtml = "";
     for(let i = 0; i < result.cookware.length; i++) {
        cookHtml += '<li>'+result.cookware[i]+'</li>';
    }
    $("#cookware").html(cookHtml);
  }});
})

$('#post-email').on("click", function(){
    var email = $('#email').val()
    console.log(email)
    axios.post('http://localhost:8080/special', {
    email: email
 
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
})





