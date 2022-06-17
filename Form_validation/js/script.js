// let nameValid=/^[a-zA-Z]/;
// let emailValid= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// let numberValid=/[!^0-9]/;
document.querySelector('.text').addEventListener('keypress',nam)

function nam(event){
    var regex=new RegExp("[a-zA-Z. ]+$");
    var key=String.fromCharCode(!event.charCode? event.which : event.charCode);
    if(!regex.test(key)) {
        event.preventDefault();
        return false; 
    }
}
document.querySelector('#graduation').addEventListener('keypress',nam);
document.querySelector('#medium').addEventListener('keypress',nam);
document.querySelector('#nationality').addEventListener('keypress',nam);
document.querySelector('#nationality').addEventListener('keypress',nam);
document.querySelector('#fname').addEventListener('keypress',nam);
document.querySelector('#occupation').addEventListener('keypress',nam);
document.querySelector('#mname').addEventListener('keypress',nam);
document.querySelector('#occupation1').addEventListener('keypress',nam);
document.querySelector('#hostel').addEventListener('keypress',nam);



document.querySelector('.btn').addEventListener('click',email)
function email(event){
    // var emailValid=new RegExp("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$");
    var emailValid=new RegExp("^[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
    // var a=String.fromCharCode(!event.charCode? event.which: event.charCode);
    var a = document.querySelector('.email').value;
    if(!emailValid.test(a)){
        // event.preventDefault();
        alert("Invalid Email")
        return false;
    }
}

document.querySelector('.number').addEventListener('keypress',number)
 function number(event){
    var numberValid=new RegExp("/^\d{10}$/");
    var num=String.fromCharCode(!event.charCode? event.which: event.charCode);
    if(!numberValid.test(num)){
        event.preventDefault();
        return false;
    }
    
}







