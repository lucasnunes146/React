import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem-Vindo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leia React
        </a>
      </header>
    </div>
  );
}

export default App;
