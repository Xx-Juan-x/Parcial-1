var form = document.getElementById("frm-registro");

form.addEventListener("submit",function(Event){

Event.preventDefault();

var errorFormulario = false;

if(form.querySelector("#nombre").value.length < 3){
    errorFormulario = true;
    document.querySelector("form .conteiner-nombre .text-error").innerHTML = "El nombre debe contener 3 o más caracteres";
    document.querySelector("form #nombre").classList.add("error");
}
else{
    document.querySelector("form .conteiner-nombre .text-error").innerHTML = "";
    document.querySelector("form #nombre").classList.remove("error");
}

if(form.querySelector("#apellido").value.length < 3){
    errorFormulario = true;
    document.querySelector("form .conteiner-apellido .text-error").innerHTML = "El apellido debe contener 3 o más caracteres";
    document.querySelector("form #apellido").classList.add("error");
}
else{
    document.querySelector("form .conteiner-apellido .text-error").innerHTML = "";
    document.querySelector("form #apellido").classList.remove("error");
}

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
