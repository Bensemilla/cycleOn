export default function Fields({field}) {
  return (
    <li className="container-fields">
      <div className="container-heading">
        <h4>{field.heading.toUpperCase()}</h4>
        <p>{field.question}</p>
      </div>  
      <div className="container-points">
        <li>
            <label for={field.heading.toLowerCase() + "-1"}>1</label>
            <input type="radio" id={field.heading.toLowerCase() + "-1"} name={field.heading.toLowerCase()} value="1"/>
        </li>
        <li>
            <label for={field.heading.toLowerCase() + "-2"}>2</label>
            <input type="radio" id={field.heading.toLowerCase() + "-2"} name={field.heading.toLowerCase()} value="2"/>
        </li>
        <li>
            <label for={field.heading.toLowerCase() + "-3"}>3</label>
            <input type="radio" id={field.heading.toLowerCase() + "-3"} name={field.heading.toLowerCase()} value="3"/>
        </li>
        <li>
            <label for={field.heading.toLowerCase() + "-4"}>4</label>
            <input type="radio" id={field.heading.toLowerCase() + "-4"} name={field.heading.toLowerCase()} value="4"/>
        </li>
        <li>
            <label for={field.heading.toLowerCase() + "-5"}>5</label>
            <input type="radio" id={field.heading.toLowerCase() + "-5"} name={field.heading.toLowerCase()} value="5"/>
        </li>
      </div>
    </li>
  )
}