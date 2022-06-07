var form = document.getElementById("frm-registro");

form.addEventListener("submit",function(Event){

Event.preventDefault();

var errorFormulario = false;
let mensaje_nombre = document.querySelector(".conteiner-nombre .text-error");
let nombre = document.querySelector("#nombre");
let edad = document.querySelector("#edad");
let mensaje_edad = document.querySelector(".conteiner-edad .text-error");
let array_temas = document.querySelectorAll("input[type='checkbox']");
let mensaje_temas = document.querySelector(".conteiner-temas .text-error");
let array_paises = document.querySelectorAll("#pais option");
let mensaje_paises = document.querySelector(".conteiner-pais .text-error");
let selector_paises = document.querySelector("#pais");
let modal = document.getElementById("modalForm");
let span_cierre = document.getElementsByClassName("close")[0];

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
if(edad.value == ""){
    errorFormulario = true;
    mensaje_edad.innerHTML = "Debe completar la edad";
    edad.classList.add("error");
}
else if(!Number.isInteger(Number(edad.value))){
    errorFormulario = true;
    mensaje_edad.innerHTML = "Debe ingresar un número";
    edad.classList.add("error");
}
else if(Number(edad.value) < 0 || Number(edad.value) > 100){
    errorFormulario = true;
    mensaje_edad.innerHTML = "La edad debe ser entre 0 - 100";
    edad.classList.add("error");
}
else{
    mensaje_edad.innerHTML = "";
    edad.classList.remove("error");
}

//Validacion sexo
let sexo_seleccionado = false;
let array_sexo = form.querySelectorAll("input[name='sexo']");
array_sexo.forEach(element => {
    if(element.checked == true){
        sexo_seleccionado = true;
    }
})

if(sexo_seleccionado == false){
    errorFormulario = true;
    document.querySelector(".conteiner-sexo .text-error").innerHTML = "Debe elegir una opcion";
}else{
    document.querySelector(".conteiner-sexo .text-error").innerHTML = "";
}

//Validacion tema de interés
let tema_seleccionado = false;
array_temas.forEach(element => {
    if(element.checked == true){
        tema_seleccionado = true;
    }
})

if(tema_seleccionado == false){
    errorFormulario = true;
    mensaje_temas.innerHTML = "Debe elegir al menos un tema de interés";
}else{
    mensaje_temas.innerHTML = "";
}


//Validacion País

let array_paises_permitido = ["arg","chi","br","uru"];
let pais_selected = selector_paises.options[selector_paises.selectedIndex].value;

if(!array_paises_permitido.includes(pais_selected)){
    errorFormulario = true;
    mensaje_paises.innerHTML = "Debe elegir un pais";

}
else{
    mensaje_paises.innerHTML = "";
}


if(errorFormulario == false){
    //form.submit();
    modal.style.display = "block";
}

});
