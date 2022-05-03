let password1 = document.querySelector("#password_1");
let password2 = document.querySelector("#password_2");
let password3 = document.querySelector("#password_3");
let password4 = document.querySelector("#password_4");
let passwordDivs = document.querySelectorAll(".passwords");
let characters = '!"#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
let errorMessage = document.querySelector('#error_message');

function setLength(){
    let length = document.querySelector("#password_length").value;
    return length;
}
function generatePassword() {
    let length = setLength();    
    if (length === "" || length === null || length === 0 || length < 5 || length > 12) {
        event.preventDefault();
        errorMessage.style.display="block";
        passwordDivs.forEach((element) => {
            element.innerHTML = '<i class="fa-solid fa-ellipsis error_text"></i>';
            element.classList.remove("copy_password");            
            console.log(element);
        });
    }
    else {
        errorMessage.style.display="none"; 
        passwordDivs.forEach((element) => {
            element.style.color = "#55F991";
            element.innerHTML = randomPassword();
            element.classList.add("copy_password");
            console.log(element);
        });
    }
    // password1.textContent = randomPassword();
    // password2.textContent = randomPassword();
    // password3.textContent = randomPassword();
    // password4.textContent = randomPassword();
}
function randomPassword(){
    let newPassword = '';
    let length = setLength();        
    for (i = 0; i < length; i++) {
        newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return newPassword;   
}
    