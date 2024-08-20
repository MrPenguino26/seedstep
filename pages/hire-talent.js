// pages/index.js
import Head from 'next/head'
import Hire from '../components/hire-college-talent'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'


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
        <Hire />
        <Footer />
      </div>
    </>

  );
}
