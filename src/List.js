import React from "react";
import "./css/List.css"
import Item from "./Item";

function List(props){
    return(
    <div className='Main'>
            <h1 className="text-3xl">
                {props.title}
            </h1>

        {/* Recibo el state como props porque estoy en funcion no clase    */}  
        <div className='list'>
        {
            props.items.map(item =>
            <Item 
                key={item.id}
                id={item.id}
                ranting={item.ranting}
                title={item.title} 
                image={item.image}
            />
            )
        }
        </div>
    </div>
    )
}

export default List;