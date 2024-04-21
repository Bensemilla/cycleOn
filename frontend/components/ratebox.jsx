import Velorouteselection from "@/components/velorouteselection";
import Fields from "@/components/fields";
import { useState } from "react";

export default function Ratebox() {
  const routes = [
    { num: 1, name: "CITY-RISSEN" },
    { num: 2, name: "CITY-EIDELSTEDT" },
    { num: 3, name: "CITY-NIENDORF" },
    { num: 4, name: "CITY-LANGENHORN" },
    { num: 5, name: "CITY-DUVENSTEDT" },
    { num: 6, name: "CITY-VOLKSDORF" },
    { num: 7, name: "CITY-RAHLSTEDT" },
    { num: 8, name: "CITY-BERGEDORF-I" },
    { num: 9, name: "CITY-BERGEDORF-II" },
    { num: 10, name: "CITY-NEUGRABEN" },
    { num: 11, name: "CITY-TU-HAMBURG" },
    { num: 12, name: "CITY-ALTONA" },
    { num: 13, name: "INNERER-RING" },
    { num: 14, name: "ÄUẞERER-RING" },
  ];

  const questionnaire = [
    { heading: "Easiness", question: "Is the route easy to navigate?" },
    {
      heading: "Scenery",
      question: "How picturesque is the landscape along the route?",
    },
    {
      heading: "Road Condition",
      question: "Is the road surface in good condition for cycling?",
    },
  ];

  const [questions, setQuestions] = useState(questionnaire);

  const submit = async (e) => {
    e.preventDefault();
    const objectResult = { route: e.target["velo-route"].value };
    const keys = questions.map((q) => q.heading.toLowerCase());
    keys.forEach((key) => {
      objectResult[key] = e.target[key]?.value;
    });
    //this console.log() is just to see the object that is going to be made into JSON
    console.log(objectResult);
    const response = await fetch("http://localhost:2500/rating", {
      method: "POST",
      body: JSON.stringify(objectResult),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
  };

  return (
    <div className="container-rate">
      <form className="form" onSubmit={submit}>
        <Velorouteselection routes={routes} />
        <br />
        <div id="container-questionnaire">
          {questionnaire.map((field) => (
            <Fields field={field} />
          ))}
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
