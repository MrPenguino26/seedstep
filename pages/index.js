// pages/index.js
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import Support from '../components/Support';

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white text-black">
      <Header />
      <Hero />
      <About />
      <Support />
      <Footer />
    </div>
  );
}
