import './App.css';
import { Carousel } from './components/Carousel/Carousel';

function App() {
    return (
        <div className="App">
            <Carousel count={15} />
        </div>
    );
}

export default App;
