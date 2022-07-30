import "./item.css"
import "../containe.css";
const Item = (props) =>{
return(
    <>
      <div className="namebox">
       <input type="checkbox" name="tyoe"/>
       <strong >{props.id+1}</strong>&nbsp;
        <h3 className="h3">{props.text}</h3>&nbsp;
        <p>{props.isComplate}</p>&nbsp;

      </div>
      <div  className="btnbox">

        <button className="allBtn">edite</button>&nbsp;
        <button className="delBtn">deleta &nbsp;<span className="span"  >&times;</span></button>&nbsp;
      </div>

    </>
)
}
export default Item