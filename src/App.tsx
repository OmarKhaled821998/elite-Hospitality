import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <LanguageProvider>
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Hero />
          <AboutUs />
          <Services />
          <Contact />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </LanguageProvider>
  );
}

export default App;
