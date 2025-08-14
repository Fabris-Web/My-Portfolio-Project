document.getElementById(`userForm`).addEventListener(`submit`, function(event) {event.preventDefault();

const firstName = document.getElementById(`firstName`).value;

const lastName = document.getElementById(`lastName`).value;

const email = document.getElementById(`email`).value;

const fullName = `${firstName} ${lastName}`;

const outPutText =`Welcome! ${fullName}, You are logged in with Email address ${email}.`;

const loginContainerDiv = document.getElementById(`loginContainerDiv`);
 
const password = document.getElementById(`password`).value;
const showPassword = document.getElementById(`showPassword`);

showPassword.addEventListener("change",function() {
    if (this.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
})


function validatePassword(password) {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?/":;{}|<>]/.test(password);

    return hasLetter && hasNumber && hasSpecialChar;
}
  
if(validatePassword(password)){
loginContainerDiv.textContent = outPutText
document.getElementById("redirectDiv").style.display = "block";
}else{
window.alert(`${firstName}! Kindly,include both numbers, texts and special characters in your password`)
}  
})     


