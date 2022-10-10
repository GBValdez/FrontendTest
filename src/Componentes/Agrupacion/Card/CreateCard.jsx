/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@apollo/client";
import React from "react";

import GET_AUTHOR from "../../../graphql/query_autor";
import Card from  "./Card"

const CreateCard= (props)=>{
    const {data,error,loading} = useQuery(GET_AUTHOR());
    if (loading) return <p>Loading..</p>;
    if (error) return <p>Error... $(error.message)`</p>
    const Datos= data.authors.rows
    return(
        <>
            {Datos.map((tipo)=>{
                const nombre= tipo.name.replace(/ /g, "+")
                return(
                    <Card Titulo={tipo.name} Sub={""} Key={tipo.id} urli={"/Author/"+tipo.id+"/"+nombre}></Card>
                )
            })}
        </>
    )
}


export default CreateCard