import './App.css'
import Routes from './Routes'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './pages/Footer'

function App() {
  return (
    <Router>
      <Navbar />
        <Routes />
      <Footer />
    </Router>
  );
}

export default App;
