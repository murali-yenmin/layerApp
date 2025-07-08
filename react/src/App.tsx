import React from 'react';
import './App.scss';
import Greeting from './Greeting';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello from React with TypeScript and Webpack!
        </p>
        <Greeting name="Gemini" />
      </header>
    </div>
  );
}

export default App;