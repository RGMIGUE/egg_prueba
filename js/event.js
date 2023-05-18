//Obtenemos el boton por su id
let boton =document.getElementById("miBoton");
//Colocamos un oyente de eventos que "escuche" el evento"Click"
boton.addEventListener("click",function(){
    alert("Has hecho clic en el boton");
});
