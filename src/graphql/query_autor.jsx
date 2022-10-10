import {gql } from "@apollo/client";
import GET_Tamano from "./query_lenght"

const GET_AUTHOR= () =>{
  const Texto=`
  query Autores{
      authors (
        options:{limit:${GET_Tamano("authors")}}
      )
      {
        rows{
          id
          name
        }
      }
    }
  ` 
  return gql(Texto)
}
export default GET_AUTHOR