import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import Calculator from './components/calculator';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div className="App">
      <h1>25 React Examples</h1>
      <Accordian />
      <RandomColor />
      <StarRating /> */

      {/* still need to work on limit filter */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={'1'} /> 

      <LoadMoreData />
      <Stopwatch />
      <QRCodeGenerator />
      
      {/* not finished */}
      {/* <Calculator /> */}

    </div>
  );
}

export default App;
