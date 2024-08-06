import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      <h1>25 React Examples</h1>
      <Accordian />
      <RandomColor />
      <StarRating />
    </div>
  );
}

export default App;
