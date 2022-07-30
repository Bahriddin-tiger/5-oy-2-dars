import "../containe.css";
import "./List.css"

const List =({children}) =>{
    return(
    <ul className=" container elList">
        {children}
    </ul>
    )
}
export default List;