import "./Titulo.css"

const Titulo= (props)=>{
    return (
        <h3 className="Titulo"> 
            <div className="Explora"> {props.Tit} </div>
            <div className="Explora2">{props.Sub}</div>
        </h3>
    )
}

export default Titulo