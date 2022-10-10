import { gql,useQuery } from "@apollo/client";

const GET_Tamano= (Tipo)=>{
    const Consulta= gql`
    query Cant{
        ${Tipo}{
          length
        }
      }
    `
    const {data,error,loading} = useQuery(Consulta);
    if (loading) return 0;
    if (error) return 0;
    
    var TAM=0
    try{
        TAM=data.authors.length
    }
    catch{
      try{
        TAM=data.categories.length
      }
      catch{
        TAM=data.posts.length
      } 
    }
    return TAM;
}

export default GET_Tamano