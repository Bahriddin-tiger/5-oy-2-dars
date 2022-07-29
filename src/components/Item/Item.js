import "../containe.css";
const Item = (props) =>{
return(
    <>
      
       <strong >{props.id}</strong>
        <h3>{props.text}</h3>
        <p>{props.isComplate}</p>
        <button className="allBtn">edite</button>
        <button className="delBtn">deleta</button>

    </>
)
}
export default Item