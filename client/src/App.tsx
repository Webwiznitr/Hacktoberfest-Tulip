import React from 'react';
import './CSS/index.scss'
import Login from './Pages/Login';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App">
      {/* <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}

      {/* <Home /> */}
      <SignUp />
    </div>
  );
}

export default App;
