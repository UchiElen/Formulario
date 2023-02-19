var resultadocheckNombre = false;
var resultadocheckEmail = false;
var resultadocheckPassword = false;
var resultadocheckPasswordConfirm = false;

function enviarForm(){
    checkNombre();
    checkEmail();
    checkPassword();
    checkPasswordConfirm(); 

    if (resultadocheckNombre && resultadocheckEmail && resultadocheckPassword && resultadocheckPasswordConfirm)
    {
        window.alert("La inscripción ha sido correcta");
    }
}

function checkNombre(){   
    var nombre = document.getElementById("nombre-id").value;
    if (nombre.length < 1 || !/^[a-zA-Z ]{2,254}$/.test(nombre) )
    {
        document.getElementById("nombre-id").style.borderColor = "red";
        document.getElementById("nombre-id").style.background = "url(./images/error-icon.svg) white no-repeat right";
        document.getElementById("nombre-id").style.backgroundSize = "15px";
        document.getElementById("nombre-id").style.backgroundPosition = "98%";
        document.getElementById("nombre-error-id").style.visibility = "visible";
        resultadocheckNombre = false;
    }
    else 
    {
        document.getElementById("nombre-id").style.borderColor = "#20D10B";
        document.getElementById("nombre-id").style.background = "url(./images/success-icon.svg) white no-repeat right";
        document.getElementById("nombre-id").style.backgroundSize = "15px";
        document.getElementById("nombre-id").style.backgroundPosition = "98%";
        document.getElementById("nombre-error-id").style.visibility = "hidden";    
        resultadocheckNombre = true;
    }
}

function checkEmail(){
    var email = document.getElementById("email-id").value;
    if (email.length < 1 || !/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/.test(email) ) // Es erróneo
    {
        document.getElementById("email-id").style.borderColor = "red";
        document.getElementById("email-id").style.background = "url(./images/error-icon.svg) white no-repeat right";
        document.getElementById("email-id").style.backgroundSize = "15px";
        document.getElementById("email-id").style.backgroundPosition = "98%";
        document.getElementById("email-error-id").style.visibility = "visible";
        if (email.length > 1)
        {
            document.getElementById("email-error-id").innerHTML = 'Email inválido';
        }
        resultadocheckEmail = false;
    }
    else //Es válido
    {
        document.getElementById("email-id").style.borderColor = "#20D10B";
        document.getElementById("email-id").style.background = "url(./images/success-icon.svg) white no-repeat right";
        document.getElementById("email-id").style.backgroundSize = "15px";
        document.getElementById("email-id").style.backgroundPosition = "98%";
        document.getElementById("email-error-id").style.visibility = "hidden";    
        resultadocheckEmail = true;
    }
}

function checkPassword(){
    var password = document.getElementById("password-id").value;
    if (password.length < 1 || password.length < 8)
    {
        document.getElementById("password-id").style.borderColor = "red";
        document.getElementById("password-id").style.background = "url(./images/error-icon.svg) white no-repeat right";
        document.getElementById("password-id").style.backgroundSize = "15px";
        document.getElementById("password-id").style.backgroundPosition = "98%";
        document.getElementById("password-error-id").style.visibility = "visible";   
        if (password.length < 8 && password.length > 0)
        {
            document.getElementById("password-error-id").innerHTML = 'No debe tener menos de 8 caracteres';
        }   
        resultadocheckPassword = false;  
    }    
    else 
    {
        document.getElementById("password-id").style.borderColor = "#20D10B";
        document.getElementById("password-id").style.background = "url(./images/success-icon.svg) white no-repeat right";
        document.getElementById("password-id").style.backgroundSize = "15px";
        document.getElementById("password-id").style.backgroundPosition = "98%";
        document.getElementById("password-error-id").style.visibility = "hidden";    
        resultadocheckPassword = true;
    }
}

function checkPasswordConfirm() {
    var password = document.getElementById("password-id").value;
    var passwordConfirm = document.getElementById("passwordConfirm-id").value;
    if (passwordConfirm.length < 1 || password != passwordConfirm)
    {
        document.getElementById("passwordConfirm-id").style.borderColor = "red";
        document.getElementById("passwordConfirm-id").style.background = "url(./images/error-icon.svg) white no-repeat right";
        document.getElementById("passwordConfirm-id").style.backgroundSize = "15px";
        document.getElementById("passwordConfirm-id").style.backgroundPosition = "98%";
        document.getElementById("passwordConfirm-error-id").style.visibility = "visible"; 
        if (password != passwordConfirm){
            document.getElementById("passwordConfirm-error-id").innerHTML = 'Las contraseñas no coinciden';
        } 
        resultadocheckPasswordConfirm = false;
    }  else
    {
        document.getElementById("passwordConfirm-id").style.borderColor = "#20D10B";
        document.getElementById("passwordConfirm-id").style.background = "url(./images/success-icon.svg) white no-repeat right";
        document.getElementById("passwordConfirm-id").style.backgroundSize = "15px";
        document.getElementById("passwordConfirm-id").style.backgroundPosition = "98%";
        document.getElementById("passwordConfirm-error-id").style.visibility = "hidden";    
        resultadocheckPasswordConfirm = true;
    }
}
