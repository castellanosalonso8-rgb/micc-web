import Header from './sections/Header';
import Hero from './sections/Hero';
import Activities from './sections/Activities';
import Teachers from './sections/Teachers';
import Facilities from './sections/Facilities';
import Schedule from './sections/Schedule';
import Location from './sections/Location';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import FloatingWhatsApp from './sections/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#actividades">
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <Activities />
        <Teachers />
        <Facilities />
        <Schedule />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
