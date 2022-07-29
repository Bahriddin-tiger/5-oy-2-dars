import List from "./components/List/List";
import Item from "./components/Item/Item";
import "./components/containe.css";
import {useState} from "react";
// import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";66

function App() {
 
 const [todo,setTodo]=useState( [
  {
    name:"uxalsh",
    isComplate:false,
  },
   {
    name:"kitob oqish",
    isComplate:false,
  },
  {
    name:"uxlash",
    isComplate:true,
  }
 ])

  // const[value,setValue]=useState("")
  let count= 0; 
  return (
    <div className="App">
 
   <form className="container" onSubmit={(evt)=>{
    evt.preventDefault();
    setTodo([
      ...todo,{
        id:count++,
        name:evt.target[0].value,
        isComplate:false,
      },   ]);
    }}>
     <input className="Input " placeholder="textt" type="text" name="text" />
     <button  type="onSubmit " > add</button>
    
   </form>
   {todo.map((e)=>{
    count++;
    e.id=count;
    // console.log(e);
})}
<List >
 {
 
  todo.map((e,index) =>(
    <li key={index}>

      <Item   text={e.name} isComplate={e.isComplate} id={e.id} />
    </li>
  ))
 }

</List>
  
    </div>
  );
}

export default App;
