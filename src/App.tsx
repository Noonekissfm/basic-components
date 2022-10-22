import React from 'react';
import './App.css';

import { Rail } from './components/Rail/Rail';

function App() {
    return (
        <div className="App">
            <Rail itemsOnPage={5} />
            <Rail itemsOnPage={7} />
            <Rail itemsOnPage={3} />
        </div>
    );
}

export default App;
