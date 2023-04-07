import {guardarServicios} from "./firebase/data.js"

let agregar_servicio = document.getElementById("enviar_servicios")

agregar_servicio.addEventListener("click",  ()=>{
    
    //e.target.parentNode
    //TODO HACER UN CONDICIONAL PARA VERIFICAR QUE LOS CAMPOS NO ESTEN VACIOS 
    let servicio = document.getElementById('servicio').value
    let precio = document.getElementById('precio').value
    let descripcion = document.getElementById('descripcion').value
  
    guardarServicios(servicio,precio,descripcion);



    

})