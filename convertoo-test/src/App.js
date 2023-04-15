import './App.css';
import Header from './components/header/Header'
import Heroes from './components/heroes/Heroes'
import Features from './components/features/Features'

function App() {
  return (
    <div className="App">
      <body>
        <header className="App-header">
        <nav className="navbar">
          <Header></Header>
          <Heroes></Heroes>
          <Features></Features>
        </nav>

        </header>
        <main>
          <h1>Hello World!</h1>
          <h2>Welcome to Convertoo Cloud.</h2>
        </main>
      </body>
    </div>
  );
}

export default App;
