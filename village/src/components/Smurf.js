import React from 'react';
import styled from 'styled-components';

const SmurfCard = styled.div`
  background: white;
  border: 5px solid black;
  width: 300px;
  text-align: center;
  margin: 10px;
  border-radius: 10px;`


const Smurf = props => {
  return (
    <SmurfCard>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

