import './App.css';
import Header from './components/header/Header'
import Heroes from './components/heroes/Heroes'
import Features from './components/features/Features'
import Pricing from './components/pricing/Pricing'

function App() {
  return (
    <div className="App">
      <body>
        <header className="App-header">
          <nav className="navbar">
            <Header></Header>
          </nav>

        </header>
        <main>
          <Heroes></Heroes>
          <Features></Features>
          <Pricing></Pricing>
        </main>
      </body>
    </div>
  );
}

export default App;
