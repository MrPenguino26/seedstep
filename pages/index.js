// pages/index.js
import Header from '../components/Header';
import Hero from '../components/Hero';
import About2 from '../components/About2';
import Footer from '../components/Footer';
import Support from '../components/Support';
import Clients from '../components/Clients';
import Comparison from '../components/Comparison';
import HireStudents from '../components/HireStudents';
import Services from '../components/Services'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Introduction from '../components/Introduction';
import OurSecret from '../components/oursecret';
import TestimonialsPage from '../components/Testimonials';


export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:wght@400;700&family=Roboto+Slab:wght@100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap&" rel="stylesheet" />
      </Head>
      <div className="flex flex-col items-center bg-white text-black">
        <Navbar />
        <About2 />
        <Clients />
        <OurSecret />
        <Services />
        <Comparison />
        <TestimonialsPage />
        <HireStudents />
        <Footer />
      </div>
    </>

  );
}
