var form = document.getElementById("formcontato__form");
var nombre = document.getElementById("txt-nom").value;
var email = document.getElementById("txt-email").value;
var asunto = document.getElementById("txt-asunto").value;
var mensaje = document.getElementById("mensagem").value;

form.addEventListener("click", function(){
    preventDefault();    
});

function validacionFormulario() {
    if(validarNombre(nombre)){
        console.log("pasamos")
    }else{
        console.log("error");
    }
}

function validarNombre(nom){    
    var tst = false;
    if(nom === null){
        console.log("no se aceptan vacios")
    }else{
        if(nom.length > 50){
            console.log("nombre muy largo")
        }else{
            tst = true;
        }        
    }
    return tst;
}

console.log(nombre);
console.log(email);
console.log(asunto);
console.log(mensaje);