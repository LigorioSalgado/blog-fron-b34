import React, { useState, useEffect } from "react"; /* hooks de react */
import image from '../img/home-bg.jpg';

function Head(props) {
    const [title,setTitle] = useState(props.title);//Parametro por default
    const [subhead,setSubHead] = useState(props.subhead);
    //useEffect -> primer param: Function, segundo param: un arreglo
    // useEffect reemplaza componentDidMount y componentDidUpdate
    useEffect(() => {
        console.log("Me pinte despues de la UI")
    },[]) //Si tiene el array vacio se ejectua solo una vez despues de pintarse (componentDidMount)
    //Si pongo una variable dentro del arreglo, escucha los cambios y se vueleve a 
    //ejecutar useEffect()//componentDidUpdate
    //title = "otra cosa"; Esto no funciona
    //setTitle('Otra cosa');Esto si funciona
  return (
    <header className="masthead" style={{backgroundImage:`url('${image}')`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>{title}</h1>
              <span className="subheading">{subhead}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Head;
