import List from "./components/List/List";
import Item from "./components/Item/Item";
import "./components/containe.css";
import {useState} from "react";
import "./components/Item/item.css"

function App() {

 const [todo,setTodo]=useState( [
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
    name:"uxlash",
    isComplate:true,
  }
 ])

  // const[value,setValue]=useState("")
 
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
    }
   

      evt.target[0].value ="";
    }}>
     <input className="Input " placeholder="Text" type="text" name="text" maxLength={30} />
     <button className="onbtn"  type="onSubmit " > ADD </button>
    
   </form>
   {/* {todo.map((e)=>{
    count++;
    e.id=count;
    // console.log(e);
})} */}
<List >
 {
 
  todo.map((e) =>(
    <li className="item" key={e.id}>

      <Item   text={e.name} isComplate={e.isComplate} id={e.id} />
   
    </li>
  ))
 }

</List>
  
    </div>
  );
}

export default App;
