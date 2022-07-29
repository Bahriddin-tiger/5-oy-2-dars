const Card = (props)=>{
    return(
        <li>
            <h3 >
             {props.name}
            </h3>
            <p>{props.egg}</p>
        </li>
    )
} 
export default Card