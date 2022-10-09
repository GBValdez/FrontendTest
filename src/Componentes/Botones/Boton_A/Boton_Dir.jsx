//import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import "./Boton_Dir.css"
    function Boton_Dir(props){
        let Clasetam="btn btn-outline-primary btn-"+ props.tam;
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        return <NavLink to={props.url} className={Clasetam} activeclassname="ActualSeccion">{props.text}</NavLink>
        
    }


export default Boton_Dir;