import React from 'react';

/* Functional component excepts props object*/
export const Welcome = (props) => <h1>Hello, {props.name}</h1>

/* Functional component excepts props object with Render*/
export function WelcomeRender(props) {
  return <h1>Hello, {props.name}</h1>;
}
