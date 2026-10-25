import {useState} from 'react';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {ContactDialog} from './components/ContactDialog';
import {Hero} from './components/sections/Hero';
import {CareBand} from './components/sections/CareBand';
import {Services} from './components/sections/Services';
import {About} from './components/sections/About';
import {Visit} from './components/sections/Visit';
import {Faq} from './components/sections/Faq';
import {Closing} from './components/sections/Closing';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CareBand />
        <Services />
        <About />
        <Visit />
        <Faq />
        <Closing />
      </main>
      <Footer onOpenContact={() => setContactOpen(true)} />
      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
