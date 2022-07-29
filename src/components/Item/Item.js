import "../containe.css";
const Item = (props) =>{
return(
    <>
       {
        // isComplated ? <input defaultChecked={true} type="checkbox"/> : <input type={checkbox} /> 
       }
       <strong >{props.id}</strong>
        <h3>{props.text}</h3>
        <p>{props.isComplate}</p>
        <button className="allBtn">edite</button>
        <button className="delBtn">deleta</button>

    </>
)
}
export default Item