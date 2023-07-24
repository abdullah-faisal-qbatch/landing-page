import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Workflow.css";

const Workflow =(props)=> {
  return (
    <div className="flex flex-col mb-12">
      <div>
        <FontAwesomeIcon icon={props.icon} border className="icon-style" />
      </div>
      <h1 className="text-2xl font-bold">{props.heading}</h1>
      <p className="max-w-md text-xs ml-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
        minus molestiae vel beatae natus eveniet.
      </p>
    </div>
  );
}

export default Workflow;
