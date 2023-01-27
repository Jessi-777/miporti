import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
// import Contact from './components/Contact';
import Home from './components/Home';
// import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
// import Services from './components/Services';

// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div>
    <Header />
    <Home />
    <Footer />
    <About />
    <Resume />
    {/* <Portfolio /> */}
    </div>
  )
}

export default App;
