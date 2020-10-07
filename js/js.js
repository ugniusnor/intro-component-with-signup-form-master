const name = document.querySelector(".name")
const lastName=document.querySelector(".last-name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.querySelector("form")
// name error
const errorName=document.querySelector(".error-text-name > p")
const errorIcon=document.querySelector(".error-name")
//email lastname
const errorLastName=document.querySelector(".error-text-lastname > p")
const errorIconLastName=document.querySelector(".error-lastname")
console.log(errorLastName);
form.addEventListener('submit', (e)=> {
    let message=[];
    if (name.value=="" || name.value==null) {
        errorIcon.style.display="inline"
        message.push("First name cannot be empty ")
    }
    if (message.length > 0) {
        e.preventDefault();
        errorName.innerHTML = message;
    }
    message=[];
    if (lastName=="" || lastName==null) {
        errorIconLastName.style.display="inline"
        message.push("Last name cannot be empty ")
    }
    if(message.length > 0) {
        e.preventDefault();
        errorLastName.innerHTML = message;
    }
   
    
})

// form.addEventListener ('submit', (e)=>{
//     let message=[];
//     if(email.value =='' || email.value== null) {
//         message.push("Email field is empty")
        
//     }
//     if (message.length > 0) {
//         e.preventDefault();
//         error.innerHTML = message.join(", ")
//        return error.style.display="flex"
    
//     }


//   if (!email.value.includes("@")){
//     e.preventDefault();
//     message.push("email must contain @")
//       return error.innerHTML=message;
//   }

// })
