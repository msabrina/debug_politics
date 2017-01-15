import React, { Component } from 'react';
import styles from './Official.css';

const Official = props => (
  <div className="officials" onClick={() => props.clickMethod(props.item)}>
    <div className="official-details">
      <h2>{props.name}</h2>
      <h3>{props.party}</h3>
    </div>
  </div>
);

export default Official;
