var form = document.getElementById("frm-registro");

form.addEventListener("submit",function(Event){

Event.preventDefault();

var errorFormulario = false;
let mensaje_nombre = document.querySelector(".conteiner-nombre .text-error");
let nombre = document.querySelector("#nombre");

//Validacion nombre
if(nombre.value.length < 3){
    errorFormulario = true;
    mensaje_nombre.innerHTML = "El nombre debe contener 3 o más caracteres";
    nombre.classList.add("error");
}
else{
    mensaje_nombre.innerHTML = "";
    nombre.classList.remove("error");
}

//Validacion apellido
if(form.querySelector("#apellido").value.length < 3){
    errorFormulario = true;
    document.querySelector(".conteiner-apellido .text-error").innerHTML = "El apellido debe contener 3 o más caracteres";
    document.querySelector("#apellido").classList.add("error");
}
else{
    document.querySelector(".conteiner-apellido .text-error").innerHTML = "";
    document.querySelector("#apellido").classList.remove("error");
}

//Validacion Email
var regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
if(!regex.test(document.querySelector("#email").value)){
    errorFormulario = true;
    document.querySelector(".conteiner-email .text-error").innerHTML = "El formato del email es incorrecto";
    document.querySelector("#email").classList.add("error");
}else{
    document.querySelector(".conteiner-email .text-error").innerHTML = "";
    document.querySelector("#email").classList.remove("error");
}







//validacion edad
if(form.querySelector("#edad").value == ""){
    errorFormulario = true;
    document.querySelector("form .conteiner-edad .text-error").innerHTML = "Debe completar la edad";
    document.querySelector("form #edad").classList.add("error");
}
else if(form.querySelector("#edad").value < 0 || form.querySelector("#edad").value > 100){
    errorFormulario = true;
    document.querySelector("form .conteiner-edad .text-error").innerHTML = "La edad debe ser entre 0 - 100";
    document.querySelector("form #edad").classList.add("error");
}
else{
    document.querySelector("form .conteiner-edad .text-error").innerHTML = "";
    document.querySelector("form #edad").classList.remove("error");
}



if(errorFormulario == false){
    form.submit();
}

});
