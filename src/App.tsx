import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppCheckbox } from './components/AppCheckbox/AppCheckbox';
import { size } from './types/sizes';

function App() {
    return (
        <div className="App">
            <div className='buttonRow'>
                <AppCheckbox checked={false} size={size.small} color="red" />
                <AppCheckbox checked={true} size={size.medium} color="hotpink" />
                <AppCheckbox checked={true} size={size.small} color="pink" />
                <AppCheckbox checked={false} size={size.large} color="gold" />
            </div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
