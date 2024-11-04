import { useContext } from 'react';
import './App.css';
import { Hero, Navbar, Services, Experience, Works, Protofileo, Testimonials, Contact, Footer } from './components'
import { themeContext } from './Context';
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : ''
      }}
    >

      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <Works />
      <Protofileo />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
