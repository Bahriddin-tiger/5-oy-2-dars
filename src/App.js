import { List } from "./components";
import { Item } from "./components";
import {useState} from "react";
import "./components/containe.css";
import "./components/Item/item.css"
import "./App.css"

function App() {

 const [todo,setTodo]=useState(JSON.parse(window.localStorage.getItem("todo")) || [
  {
   id:0,
    name:"uxalsh",
    isComplate:false,
  },
   {
    id:1,
    name:"kitob oqish",
    isComplate:false,
  },
  {
    id:2,
    name:"yugurish",
    isComplate:true,
  }

 ]) 


  return (
    <div className="App">
 
   <form className="container form" autoComplete="off" onSubmit={(evt)=>{
    evt.preventDefault();

    if(evt.target[0].value !== ""){
  

      setTodo([
        ...todo,{
          id:todo.at(-1).id ? todo.at(-1).id+1 : 1,
          name:evt.target[0].value,
          isComplate:false,
        },   ]);
        window.localStorage.setItem("todo",JSON.stringify(todo))
    }
   

      evt.target[0].value ="";
    }}>
     <input className="Input " placeholder="Text" type="text" name="text" maxLength={30} />
     <button className="onbtn"  type="onSubmit " > ADD </button>
    
   </form>
<List >
 {
 
  todo.map((e) =>(
    <li className="item" key={e.id}>

      <Item   item={e} todo={todo} setTodo={setTodo} />
   
    </li>
  ))
 }

</List>
  
    </div>
  );
}

export default App;
