// pages/index.js
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import Support from '../components/Support';
import Clients from '../components/Clients';
import Comparison from '../components/Comparison';
import HireStudents from '../components/HireStudents';
import Services from '../components/Services'



export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white text-black">
      <Header />
      <Hero />
      <About />
      <Support />
      <Clients />
      <Comparison />
      <Services />
      <HireStudents />
      <Footer />
    </div>
  );
}
