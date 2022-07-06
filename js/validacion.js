var btn__submit = document.getElementById("btn__submit");
btn__submit.addEventListener("click", function(event){
    event.preventDefault();

    var nombre = document.getElementById("txt-nom").value;
    var email = document.getElementById("txt-email").value;
    var asunto = document.getElementById("txt-asunto").value;
    var mensaje = document.getElementById("mensagem").value;
    var span = document.getElementById("mensajes--errores");

    var form = document.querySelector("#formcontato__form");        
    var errores = validarForm(nombre, email, asunto, mensaje);
    if(errores.length){
        mostrarMensajes(errores);
        return;
    }
    
    span.classList.add("mensajes--enviado");
    span.classList.remove("mensajes--errores");    

    span.innerHTML = "Mensaje Enviado con exito";
    form.reset();
});

function validarForm(nombre, email, asunto, mensaje){
    var errores = [];
    var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;    
    if(nombre.length <= 0) {
        errores.push("Por favor, escriba su nombre");
    }    
    if(nombre.length >= 50) {
        errores.push("Error, El nombre no debe exceder los 50 caracteres");
    }
    if(email.length <= 0) {
        errores.push("Por favor, ingrese un email");
    }
    if(!emailRegex.test(email)) {
        errores.push("Error, ingrese un correo valido");
    }
    if(asunto.length <= 0) {
        errores.push("Por favor, escriba el asunto");
    }    
    if(asunto.length >= 50) {
        errores.push("Error, El asunto no debe exceder los 50 caracteres");
    }
    if(mensaje.length <= 0) {
        errores.push("Por favor, escribe un mensaje");        
    }
    if(mensaje.length>=300) {
        errores.push("Error, el mensaje es demasiado largo");
    }
    return errores;
}

function mostrarMensajes(errores) {
    var span = document.getElementById("mensajes--errores");
    span.innerHTML = "";
    errores.forEach(function(error){
        var p = document.createElement("p");
        p.textContent = error;
        p.classList.add("mensajes--errores");
        span.appendChild(p);
    });
}
