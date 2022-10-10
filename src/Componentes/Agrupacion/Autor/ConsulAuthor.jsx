/* eslint-disable react-hooks/rules-of-hooks */
import Cliente from "../../Cliente apollo/Cliente";
import React from "react";
import { ApolloProvider, toPromise } from "@apollo/client";
import GET_POS from "../../../graphql/query_post";
import { useParams } from "react-router-dom";
import Titulo from "../../Titulo/Titulo";
import Agrupacion from "../Agrupacion";
import HacerConsulta from "../Card/HacerQuery";
import Card from "../Card/Card"
const Final =()=>{
    const {id,name}= useParams()
    const Nombre= name.replace(/[+]/g," ")
    return(
            <div className="container-sm">
                <Titulo Tit="Servicio" Sub={Nombre}></Titulo>
                
                <ApolloProvider client={Cliente}>
                    <Agrupacion Titulo="" etiqueta={<ConsultAuthor idv={id}/>}></Agrupacion>
        </ApolloProvider>
        </div>
        
    )
}
const ConsultAuthor= (props)=>{
    var Datos= HacerConsulta(GET_POS())
    if (Datos){
        Datos= Datos.posts.rows
    
        return(
        <>
            {Datos.map((tipo)=>{
                if (tipo.author.id === props.idv)
                {
                return(
                    <Card Titulo={tipo.title} Sub={"Reactions: " + tipo.reactions} Key={tipo.title} Cuerpo={tipo.body} urli="">

                    </Card>
                )
                }
            })}
        </>

    )
    }
    else{
        return <h3>Cargando</h3>
    }
}


export default Final