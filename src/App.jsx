import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AppCSS = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  const [joke, setJoke] = useState('');
  const getJoke = () => {
    axios
      .get('https://official-joke-api.appspot.com/random_joke')
      .then((res) => {
        setJoke(res.data.setup + ' ... ' + res.data.punchline);
      });
  };
  return (
    <AppCSS>
      <div>
        <h1>Hello Youtube</h1>
        <button onClick={getJoke}>Get a joke here !</button>
        <p>{joke}</p>
      </div>
    </AppCSS>
  );
}
