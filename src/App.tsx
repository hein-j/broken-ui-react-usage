import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <Authenticator>
                {({ user }) => {
                  console.log('this should fire, no?')
          return <button>hi</button>
        }}
      </Authenticator>
    </div>
  );
}

export default App;
