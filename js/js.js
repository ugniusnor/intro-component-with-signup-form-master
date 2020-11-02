const name = document.querySelector(".name")
const lastName=document.querySelector(".last-name")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const form = document.querySelector("form")
// name error
const errorName=document.querySelector(".error-text-name > p")
const errorIcon=document.querySelector(".error-name")
// lastname input
const errorLastName=document.querySelector(".error-text-lastname > p")
const errorIconLastName=document.querySelector(".error-lastname")
//email input errors
const errorEmail=document.querySelector(".error-text-email > p")
const errorEmailIcon=document.querySelector(".error-email")
//password input errors
const errorPassword=document.querySelector(".error-text-password > p")
const errorPasswordIcon=document.querySelector(".error-password")
//input function
form.addEventListener('submit', (e)=> {
    //checking name input
    let message=[];
   
    if (name.value=="" || name.value==null) {
        errorIcon.style.display="inline"
        message.push("First name cannot be empty ")
    }
    if (message.length > 0) {
        e.preventDefault();
        errorName.innerHTML = message;
    }
    else {
        errorName.style.display="none";
        errorIcon.style.display="none";
    }
    //checkng lastName input
    message=[];
    if (lastName.value =="" || lastName.value==null) {
        errorIconLastName.style.display="inline";
        message.push("Last name cannot be empty ");
    }
  
    if(message.length > 0) {
        e.preventDefault();
        errorLastName.innerHTML = message;
    }
    else {
        errorLastName.style.display="none"
        errorIconLastName.style.display="none"
    }
    message=[];
//checking email input
    if (email.value =="" || email.value==null ||!email.value.includes("@") || !email.value.includes(".") ) {
        errorEmailIcon.style.display="inline";
        message.push("It doesn't look like an email");
    }
 
    if(message.length > 0) {
        e.preventDefault();
        errorEmail.innerHTML = message;
    }
    else {
        errorEmail.style.display="none"
        errorEmailIcon.style.display="none"
    }
message=[];
{/* <div class="form-container">
  <form action="#" NoValidate>
    <div class="input input-name"> 
      <input class="name" type="text" placeholder="First Name">
      <div class="error error-name">!</div> 
      <div class="error-text error-text-name"><p></p></div>
    </div> */}
//checking password
if(password.value =="" || password.value==null || password.value.length < 8) {
    errorPasswordIcon.style.display="inline";
    message.push("Passwod must contain at least 8 characters");
    
}
if ( message.length > 0) {
    e.preventDefault();
    errorPassword.innerHTML=message
}
message=[];


})
