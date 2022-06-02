import './App.css';
import Header from './components/header/Header';
import Info from './components/info/Info';
import Map from './components/map/Map';

function App() {

  return (
    <div className="mainContainer">
      <Header />
      <Info />
      <Map />
    </div>
  );
}

export default App;
