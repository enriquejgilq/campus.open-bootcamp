import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
  const [age, setage] = useState(28);
  const birthday =()=>{
    setage(age+1)

  } 
  return (
    <div>
      <h1> hola: {props.name} desde componente funcional</h1>
      <h2> tu edad es de : {age}</h2>
      <button onClick={birthday}> Cumpleaños</button>
    </div>
  );
};


GreetingF.propTypes = {
name: PropTypes.string,

};


export default GreetingF;

