//let traer_btn = document.getElementById("traer");

// Get a reference to the database service
var database = firebase.database();

// Listen for form submissions
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  var titulo = document.querySelector("#titulo").value;
  var precio = document.querySelector("#precio").value;
  var descripcion = document.querySelector("#descripcion").value;

  // GUARDAR SERVICIOS
  database.ref("servicios").push({
    titulo,
    precio,
    descripcion,
  });

  // Clear form fields
  document.querySelector("#titulo").value = "";
  document.querySelector("#precio").value = "";
  document.querySelector("#descripcion").value = "";

  // Show success message
  alert("Mensaje enviado correctamente!");

  
});


/*traer_btn.addEventListener('click', ()=>{
    database.ref("servicios/").remove().then(()=>{
        alert('eliminado')
    })
    .catch((error) => {
        console.error("Error al eliminar el registro: ", error);
      });
    
    
})*/




/**CREAR SERVICIO 
 * @servicio: string para guardar el servicio
 */
export async function  guardarServicios (servicio,precio,descripcion) {
    try {
        await database.ref("servicios").push({
            servicio,
            precio,
            descripcion,
          });
          alert("servicio creado")
        
    } catch (error) {
        alert(error)
    }
   
    
}
/**LLAMAR TODOS LOS SERVICIOS */

export async function  llamarServicios () {
    return new Promise((resolve, reject) => {
        database.ref("servicios").once("value", function(snapshot) {
          const datos = snapshot.val();
          resolve(datos);
        }, function(error) {
          reject(error);
        });
      });
  
    
}

function obtenerDatosDeFirebase() {
    return new Promise((resolve, reject) => {
      database.ref("servicios").once("value", function(snapshot) {
        const datos = snapshot.val();
        resolve(datos);
      }, function(error) {
        reject(error);
      });
    });
  }

//ELIMINAR SERVICIO
export async function  eliminarServicio (id) {


    await  database.ref("servicios/"+id).remove().then(()=>{
        alert('eliminado')
    })
    .catch((error) => {
        console.error("Error al eliminar el registro: ", error);
      });
    
    
}



