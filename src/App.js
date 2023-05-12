import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Pokemon_get from './components/Pokemon_get';

function App() {
  return (
    <div className="App">
      <h1>Pokemon Getter</h1>
      <br />
      <Pokemon_get />
    </div>
  );
}

export default App;
