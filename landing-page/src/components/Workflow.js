import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Workflow = (props) => {
  return (
    <div className="flex flex-col" style={{
      marginBottom:"50px"
    }}>
    <div>
    <FontAwesomeIcon icon={props.icon} size="lg" border style={{
      backgroundColor:"#2374ea",
      color:"white"
    }}/>
    </div>
    <h1 className="text-2xl font-bold">
      Robust Workflow
    </h1>
    <p className="max-w-md text-xs ml-0">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
      minus molestiae vel beatae natus eveniet.
    </p>          
  </div>
)
}

export default Workflow
