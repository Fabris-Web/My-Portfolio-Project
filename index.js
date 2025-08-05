document.getElementById(`userForm`).addEventListener(`submit`, function(event) {event.preventDefault();

const firstName = document.getElementById(`firstName`).value;

const lastName = document.getElementById(`lastName`).value;

const email = document.getElementById(`email`).value;

const yearOfBirth = document.getElementById(`yearOfBirth`).value;

const fullName = `${firstName} ${lastName}`;
 
let currentYear = 2025;

let age = currentYear - yearOfBirth;

const loginContainerDiv = document.getElementById(`loginContainerDiv`);


loginContainerDiv.textContent = outPutText;
                                                                                

document.getElementById("redirectDiv").style.display = "block";

})
