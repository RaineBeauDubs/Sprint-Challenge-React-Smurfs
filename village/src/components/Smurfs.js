import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

const SmurfH1 = styled.h1`
  font-size: 40px;
  color: white;`

const SmurfList = styled.ul`
  display: flex;
  width: 900px;
  flex-wrap: wrap;
  margin: 10px;`

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <SmurfH1>Smurf Village</SmurfH1>
        <SmurfList>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </SmurfList>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
