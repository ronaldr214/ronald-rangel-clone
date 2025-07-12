import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Plans from '../components/Plans';
import About from '../components/About';
import Team from '../components/Team';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Plans />
      <About />
      <Team />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}