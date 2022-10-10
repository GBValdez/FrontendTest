const Botones= (opciones)=>{

    return(
        <div className="btn-group" role="group" aria-label="Basic example">
        {opciones.map( (num)=>{    
            return(
            <>  
                <button key={num}  type="button" className="btn btn-primary">{num} </button>
            </>
        )
        })}
        </div>

        
    )
}

export default Botones