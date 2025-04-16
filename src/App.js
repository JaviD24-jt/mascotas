import './App.css';
import Mascotas from "./componentes/mascotas.jsx"; //Se debe seguir la ruta de laas carpertas, además de importar la funcion
function App() {
  return (
    <div className="App">
      <div className='contenedor_principal'>
      <h1>Estás son mis mascotas</h1>
      <Mascotas 
        nombre="Kara"
        ciudad="Soacha"
        tipo="Gato"
        raza="Angora"
        texto=" es una gata de color blanco con naranja, ella es la última mascota llegada a la casa y la primera a mi ciudad,
        Kara vine de una camada que fue por completa adpotada y la trajo la novia de mi hermano; a Kara no le tomó mucho tiempo adaptarse a su
        nuevo hogar y desde el principio siempre fue muy consentida, hace ruidos cuando va al baño y le gusta trepar nuevos lugares siempre."
        imagen="Kara"/>
        <Mascotas
        nombre="Luna"
        ciudad="Soacha"
        tipo="Perro"
        raza="Schnauzer"
        texto=" fue rescatada de una terraza donde vivía, sus cuidadores no podían mantenerla dentro de la casa, así que optaron por 
        dejarla allí sin importar el clima; cuando llegó a nosotros estaba muy delgada y su pelo parecía alambre, lo particular en Luna 
        siempre ha sido su gran energía es una perra muy cariñosa y cuando te mira a los ojos, hace carita de 'perrito regañado' "
        imagen="Luna"
        />
        <Mascotas
        nombre="Simón"
        ciudad="Bogotá"
        tipo="Perro"
        raza="Akita "
        texto=" fue mi primer perro, fue un perro grande imponente, fuerte fue un perro muy tranquilo le gustaban las frutas y
        tenía toda una terraza cubierta para jugar, claramente tenía más fuerza que mi yo de 6 años y casi siempre se portaba bien, él no
        vivió mucho conmigo y cuando envejeció seguía siendo imponenete."
        imagen="Simon"
        />
      </div>
    </div> 
  );
}

export default App;
