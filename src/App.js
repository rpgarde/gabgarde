import './App.css';
import Header from './components/Header'
import Intro from './pages/Intro'
import About from './pages/About'
import ArtPortfolio from './pages/ArtPortfolio'
import Conservation from './pages/Conservation'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <Header/>
    <Intro/>
    <Conservation/>
    <ArtPortfolio/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
