let data = [];

function obtenerDatos() {
  let nombreInfo = document.getElementById("name").value;
  let origenInfo = document.getElementById("origen").value;
  let destinoInfo = document.getElementById("destino").value;
  let personasInfo = document.getElementById("personas").value;
  let fechaInfo = document.getElementById("fecha").value;
  
  let usuarios = {
    nombre: nombreInfo,
    origen: origenInfo,
    destino: destinoInfo,
    personas: personasInfo,
    fecha: fechaInfo
  };

data.push(usuarios)
console.log(data);

}


function filtrarDatos(){
  let filtrado = "";

  for(let i=0;i<data.length;i++){

    if (data[i].destino.toUpperCase() == "CANARIAS" || data[i].destino.toUpperCase() == "MALLORCA"
    || data[i].destino.toUpperCase() == "GALICIA"){

      // console.log(data[i]);
      
      filtrado += `<p> Nombre: ${data[i].nombre}</p>
      <p> Origen: ${data[i].origen}</p>
      <p> Destino: ${data[i].destino}</p>
      <p> Nº Personas: ${data[i].personas}</p>
      <p> Fecha: ${data[i].fecha}</p>`
    }
  }

  document.getElementById('obtenerDatos').innerHTML= `${filtrado}`;
}




