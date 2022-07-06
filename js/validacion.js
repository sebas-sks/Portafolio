var btn__submit = document.getElementById("btn__submit");
btn__submit.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.getElementById("formcontato__form");
    
    
    validacionFormulario();

});

function validacionFormulario() {
    
    var nombre = document.getElementById("txt-nom").value;
    var email = document.getElementById("txt-email").value;
    var asunto = document.getElementById("txt-asunto").value;
    var mensaje = document.getElementById("mensagem").value;
        
    if(validarTextos(nombre)){        
        if(validarCorreo(email)){
            if(validarTextos(asunto)){
                if(validarMensaje(mensaje)){
                    console.log("el mensaje esta bien");
                }else{
                    console.log("El asunto no es valido");
                }                
            }else{
                
            }

        }else {
            console.log("Correo incorrecto");
        }
    }else{
        console.log("error");
    }
}

function validarTextos(txt){    
    var tst = false;
    if(txt.length == 0){
        console.log("no se aceptan vacios")
    }else{
        if(txt.length >= 50){
            console.log("nombre muy largo");
        }else{
            tst = true;
        }        
    }
    return tst;
}

function validarMensaje(menss) {
    var tst = false;
    if(menss.length == 0){
        console.log("No se aceptan vacios");
    }else if(menss.length >= 300){
        console.log("Mensaje demasiado largo");
    }else{
        console.log("Mensaje correcto");
        tst = true;
    }
    return tst;
}

function validarCorreo(email){
    var tst = false;
    var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;    
    if(email.length <= 0){
        console.log("El campo no puede estar vacio");
    }else {
        if(emailRegex.test(email)){
            console.log("paso");                        
            tst = true;
        }else{
            console.log("El correo no es valido");            
        }
    }
    return tst;
}
