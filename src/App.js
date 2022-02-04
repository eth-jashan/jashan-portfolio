import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Experience from './Pages/Experience';

function App() {
  return (
    <div style={{width:'100vw'}}>
      <Home />
      <About />
      <Experience />
      <ContactUs />
    </div>
  );
}

export default App;
