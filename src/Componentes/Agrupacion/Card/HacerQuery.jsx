import { useQuery } from "@apollo/client";

const HacerConsulta= (Consulta)=>{
    const {data,error,loading} = useQuery(Consulta);
    if (loading) return false;
    if (error) return false
    const Datos= data
    console.log("essoosososoosso")
    return Datos
}

export default HacerConsulta