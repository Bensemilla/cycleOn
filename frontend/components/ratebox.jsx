import Velorouteselection from "@/components/velorouteselection";
import Fields from "@/components/fields";

export default function Ratebox() {
  const questionnaire = [
    { heading: "Easiness", question: "Is the route easy to navigate?"}, 
    { heading: "Scenery", question: "How picturesque is the landscape along the route?"},
    { heading: "Road Condition", question: "Is the road surface in good condition for cycling?"}
  ]
  return (
    <div className="container-rate">
      <form className="form" action="my-handling-form-page" method="GET">
        <Velorouteselection />
        <br/>
        <div id="container-questionnaire">
          {questionnaire.map(field =>
            <Fields field={field} />
          )}
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}