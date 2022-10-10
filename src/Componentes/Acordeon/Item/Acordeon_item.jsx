
const ItemAcordion=(props)=>{
    return(
        <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {props.Titulo}
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse "
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
          </div>
        </div>
      </div>
    )
}

export default ItemAcordion