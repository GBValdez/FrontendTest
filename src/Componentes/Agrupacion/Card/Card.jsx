import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <Link to={props.urli} className="Carta">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.Titulo}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.Sub}</h6>
        <p className="card-text">
          {props.Cuerpo}
        </p>
      </div>
    </div>
    
    </Link>
  );
};
export default Card