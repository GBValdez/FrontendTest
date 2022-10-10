import { ApolloProvider } from "@apollo/client";
import Cliente from "../Cliente apollo/Cliente";
import CategoriesTitle from "../Agrupacion/Card/CategoriesTitle";
const Acordeon = () => {
  return (
    <div className="accordion" id="accordionExample">
        <ApolloProvider client={Cliente}>
            <CategoriesTitle></CategoriesTitle>
        </ApolloProvider>

    </div>
  );
};

export default Acordeon
