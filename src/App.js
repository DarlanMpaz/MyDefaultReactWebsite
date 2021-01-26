import './App.css'
import Routes from './Routes'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
