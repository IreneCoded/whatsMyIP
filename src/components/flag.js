import React, {useState} from 'react';
import Mapper from './map';


export default function Flag(props) {

    console.log(props)

  

  return (
  
    <div id="flag"  >
        <img src={ `https://flagcdn.com/h20/${props.code.toLowerCase()}.png`}
        srcset={`https://flagcdn.com/h40/${props.code.toLowerCase()}.png 2x,
        https://flagcdn.com/h60/${props.code.toLowerCase()}.png 3x`} />
        <div></div>
        </div>
    
   
  );
}

