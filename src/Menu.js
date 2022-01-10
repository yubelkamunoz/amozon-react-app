//Estructura basica de un componente

//imports
import React from "react";
import Search from "./Search";
import "./css/Menu.css";

//instancio el componente con una funcion para el render
function Menu(props) {
  return (
    <div className="containermax">
      <div className="subcontainer">
        <div className="logo mt-2">
          {props.title}
        </div>

        {/*componente de buscador */}        
        <div className="search">
        <h1 className="uppercase">{props.info}</h1>
        <Search/>
        </div>
        
        {/* boton */}
        <div className="actions">
          <button class="mt-2 bg-blue-600 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Añadir libro</span>
          </button>
        </div>
      </div>
    </div>
  );
}

//export el componente para otros componentes
export default Menu;
