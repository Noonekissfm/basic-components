import './App.css';
import { AppCheckbox } from './components/AppCheckbox/AppCheckbox';
import { Size } from './types/Sizes';

function App() {
    return (
        <div className="App">
            <div className='buttonRow'>
                <AppCheckbox checked={false} size={Size.SMALL} color="red" />
                <AppCheckbox checked={true} color="hotpink" />
                <AppCheckbox checked={true} size={Size.SMALL} color="pink" />
                <AppCheckbox checked={false} size={Size.LARGE} />
            </div>
        </div>
    );
}

export default App;
