import "./css/App.css";
import Menu from './Menu.js';
import List from './List.js';
import React from 'react';

/* El componente principal lo trabajo como clase porque altera estados */
class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      books:[
        {id:0, ranting:4, title:'Hary Potter', image:'libro01.jpg'},
        {id:1, ranting:4, title:'Hary Potter', image:'libro02.jpg'},
        {id:2, ranting:3, title:'El principito', image:'libro03.jpg'},
        {id:3, ranting:2, title:'Otro', image:'libro04.jpg'}
      ]
    };
  }
  

render(){
  return (
    <div className='app'>
      <Menu title='Amozon' info='Tienda de libros' />
     {/*  paso el props como this.state como obj porque estoy en una clase */}
      <List title='Lista de Libros disponibles' items={this.state.books} />
    </div>
);
}

}

export default App;
