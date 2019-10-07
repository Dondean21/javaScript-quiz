var submit = document.querySelector("#submit");
var initialsInput = document.querySelector("#initials");
var user;

submit.addEventListener("click",function(event){
    event.preventDefault();


   user = initialsInput.value;
   
   console.log(user);
   
   localStorage.setItem("user",JSON.stringify(user));
   
   var highScores = JSON.parse(localStorage.getItem("user"));

   
   
});