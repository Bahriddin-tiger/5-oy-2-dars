import "./item.css"
import "../containe.css";

export  const Item = ({item,todo,setTodo}) =>{

const newTodo = (todoId)=>{
  const filterTodo = todo.filter(todo => todo.id !== todoId)
  setTodo([...filterTodo]);
}

const newEditTodo = (todoId)=>{
 const editText = prompt("Yangi  malumot kiriting!")
 const findTodo=todo.find(todo =>todo.id === todoId)

 findTodo.name = editText;
 setTodo([...todo])
}

// const newCheckTodo = (todoId)=>{
  
//   const findTodo=todo.find(todo =>todo.id === todoId)
 
//   findTodo.item.isComplate = !findTodo.item.isComplate;
//   setTodo([...todo])
//  }

 
return(
    <>
      <div className="namebox">
       <input className="form-check-input"  type="checkbox" name="tyoe"/>
       <strong >{item.id + 1}</strong>&nbsp;
         <h3  className={"h3"} >{item.name}</h3>      
        <p>{item.isComplate}</p>&nbsp;
      </div>
      <div  className="btnbox">
 
        <button onClick={ () => newEditTodo(item.id)} className="allBtn btn ">edite</button>&nbsp;
        <button onClick={ () => newTodo(item.id)} className="delBtn">deleta &nbsp;<span className="span"  >&times;</span></button>&nbsp;
      </div>

    </>
)
}
