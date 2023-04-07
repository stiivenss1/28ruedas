import {guardarServicios} from "./firebase/data.js"

let agregar_servicio = document.getElementById("enviar_servicios")

agregar_servicio.addEventListener("click", function (e){
    event.preventDefault();

    let servicio = document.getElementById('servicio').value
    let precio = document.getElementById('precio').value
    let descripcion = document.getElementById('servicio').value

    alert(servicio)

})