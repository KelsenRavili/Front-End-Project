function validate(){
    let name = document.getElementById('fullname').value.trim();
    let email = document.getElementById('email').value.trim();
    let gender = document.getElementById('gender').value.trim();
    let address = document.getElementById('address').value.trim();
    let letter = document.getElementById('letter');


    //validate name
    if(name == ''){
        alert("Name is required");
        return false;
    }
    else if(name.length < 6){
        alert("Name must be more than six letter.");
        return false;
    }

    //validate email
    if(email == ''){
        alert('Email is required');
        return false;
    }
    else if(!validateEmail(email)){
        alert("Email is invalid!");
        return false;
    }

    //validate gender
    if(gender == 'Gender'){
        alert('Select your gender.');
        return false;
    }

    //validate address
    if(address == ''){
        alert("Address is required");
        return false;
    }
    else if(address.length >= 50){
        alert('Address must be less than 50 characters')
        return false;
    }

    //validate letter
    if(!letter.checked){
        alert('You must check the box');
        return false;
    }

    let confirmResult = confirm("Are you sure you want to register?");
    if(confirmResult){
        alert("Form submitted");
    }
    else{
        alert("Submit cancelled");
    }
}

function validateEmail(email){
    return (email.indexOf("@") != -1) && (email.endsWith(".com"))
}

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function (){
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    navbar.classList.remove('active');
}