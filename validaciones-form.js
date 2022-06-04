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

if(errorFormulario == false){
    form.submit();
}

});
