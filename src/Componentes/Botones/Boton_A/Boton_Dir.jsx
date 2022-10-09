//import React,{Component} from "react";
import "./Boton_Dir.css"
    function Boton_Dir(props){
        let Clasetam="btn btn-outline-primary btn-"+ props.tam;
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        return <a type="button" className={Clasetam}>{props.text}</a>
        
    }


export default Boton_Dir;