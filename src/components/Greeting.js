import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingReducer';
import logo from '../logo.svg';

const Greeting = () => {
  const dispatch = useDispatch();

  const greeting = useSelector((state) => state.data);

  useState(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{greeting}</h1>
      </header>
    </div>
  );
};

export default Greeting;
