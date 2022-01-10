import React from "react";
import "./css/Item.css"

function Item(props){
    return(
        <div>
        {props.title}
        </div>
    )  
}

export default Item;