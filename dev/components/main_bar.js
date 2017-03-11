import React, { Component } from 'react';
import Logo from './logo';
import Button from './add_button';

const MainBar = (props) => {
  return (
    <div className="main-bar">
      <Logo />
      <Button onNewAragmatiki={props.onNewAragmatiki} />
    </div>
  );
}

export default MainBar;
