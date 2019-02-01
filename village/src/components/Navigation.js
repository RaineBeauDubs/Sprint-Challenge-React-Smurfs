import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">
        <h3>Smurfs</h3>
      </NavLink>
      <NavLink to="/smurf-form">
        <h3>Add Smurf</h3>
      </NavLink>
    </div>
  );
};

export default Navigation;