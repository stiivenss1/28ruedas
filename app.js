import {eliminarServicio, guardarServicios, llamarServicios} from "./firebase/data.js"

let agregar_servicio = document.getElementById("enviar_servicios")
const serviciosBody = document.getElementById("body_servicio")


agregar_servicio.addEventListener("click",  ()=>{
    
    //e.target.parentNode
    //TODO HACER UN CONDICIONAL PARA VERIFICAR QUE LOS CAMPOS NO ESTEN VACIOS 
    let servicio = document.getElementById('servicio').value
    let precio = document.getElementById('precio').value
    let descripcion = document.getElementById('descripcion').value
    
    guardarServicios(servicio,precio,descripcion);
   
    llamar()
    


})


function llamar (){
    llamarServicios()

    .then(datos =>{
        serviciosBody.innerHTML= ""
        for(let servicio in datos){
            
            serviciosBody.innerHTML+= `<tr>
            <td>${servicio}</td>
            <td>${datos[servicio].servicio}</td>
            <td>${datos[servicio].precio}</td>
            <td>${datos[servicio].descripcion}</td>
            <td>
              <button class="edit-btn">Editar</button>
              <button class="delete-btn">Eliminar</button>
            </td>
          </tr>`

        }
       
    })
    .catch(error => {
        console.log("Error al obtener los datos:", error);
      });
}
llamar()


document.addEventListener('click', (evento)=>{
 
    if (evento.target.className == "delete-btn") {
        const id_service = evento.target.parentNode.parentNode.childNodes[1].textContent
        
        eliminarServicio(id_service)
        llamar()
    }
  })

 
//console.log(llamarServicios())


