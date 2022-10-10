import { gql } from "@apollo/client";
import GET_Tamano from "./query_lenght"
function GET_POS(){
  const Texto= `
  query Postes{
      posts (
        options:{limit:${GET_Tamano("posts")}}
      ) {
        rows{
          title
          reactions
          body
          author{
            id
            name
          }
          categories{
            name
          }
        }
      }
    }
  `
  const POOSS= gql(Texto)
  return POOSS
}




export default GET_POS;
