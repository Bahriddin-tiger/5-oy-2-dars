import "../containe.css";
import "./List.css"

 export const List =({children}) =>{
    return(
    <ul className=" container elList">
        {children}
    </ul>
    )
}
