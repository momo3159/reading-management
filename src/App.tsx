import logo from './logo.svg';
import Button from './components/atoms/Button';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
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
      <Button
        text="読了"
        backgroundColor="black"
        padding="20px 40px"
        borderRadius="40px"
      />
    </header>
  </div>
);

export default App;
