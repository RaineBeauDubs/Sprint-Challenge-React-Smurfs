import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavDiv = styled.div`
  display: flex;
  background: grey;
  width: 100%;
  justify-content: space-evenly;`

const Navigation = () => {
  return (
    <NavDiv>
      <NavLink to="/">
        <h3>Smurf Village</h3>
      </NavLink>
      <NavLink to="/smurf-form">
        <h3>Add Smurf</h3>
      </NavLink>
    </NavDiv>
  );
};

export default Navigation;