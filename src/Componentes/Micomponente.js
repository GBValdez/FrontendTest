import React,{Component} from "react";
//Creación de componentes en react

class MiComponente extends Component{

    render(){
        let recerta={
            Nombre:"Pizza",
            ingredientes: ["Tomate","Jamon","Cebolla"],
            Calorias:100
        }
        //Para mandra 2 elementos sin agruparlos usar <React.Fragment> 
        return(
            
            <React.Fragment>
                <h2>{recerta.Nombre}</h2>
                <ol>{
                    recerta.ingredientes.map((ingredientes,i)=>{
                        return(
                            <li key={i}>{ingredientes}</li>
                        )
                    })
                
                }</ol>
            </React.Fragment>
        );
    }
}
export default MiComponente;