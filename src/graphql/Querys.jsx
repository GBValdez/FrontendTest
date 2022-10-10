import { gql } from "@apollo/client";

const GET_CATEGORIES= gql`
query categories  {
  categories (options:{limit:1000})
  {
    rows{
      name
    }
  }
}
`


export default GET_CATEGORIES;
