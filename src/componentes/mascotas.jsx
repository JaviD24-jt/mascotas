import React from "react";
import "../style/mascotas.css"
//Se puede exportar también (exportación nombrada) export function Mascotas(){  y luego se  coloca  { Mascostas } en app.js
function Mascotas(props){
  return(
    <div className="contenedor_mascotas">
      <img className="Imagen_mascota"
      src={require(`../imgs/foto_${props.imagen}.png`)} alt={`Imagen de ${props.nombre}`}/>  


    <div className="contenedor_texto">
      <p className="nombre_Mascota">
        <strong>{props.nombre}</strong> en {props.ciudad}
      </p>
      <p className="tipo_animal">
        Es un {props.tipo} y es de raza <strong>{props.raza}</strong>
      </p>
      <p className="texto">{props.nombre} {props.texto}
      </p>
    </div>
    </div>
  );
}

export default Mascotas; //Siempre se debe exportar lo que se importa