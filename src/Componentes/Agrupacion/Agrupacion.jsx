import "./group.css"
const Agrupacion=(props)=>{
    return(
        <div className="Group">
            <h4>{props.Titulo}</h4>
            <div className='Post-Group'>
                {props.etiqueta}
            </div>
        </div>
    )
}

export default Agrupacion