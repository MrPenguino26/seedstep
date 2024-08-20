// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 w-full fixed top-0 left-0 z-50 font-sans">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/logo2.png" alt="Logo" width={100} height={50} />
          </Link>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          <Link href="/internship" className="text-black">
            Find an internship
          </Link>
          <Link href="/hire-talent" className="text-black">
            Hire college talent
          </Link>
          <Link href="/conduct-market-research" className="text-black">
            Conduct market research
          </Link>
        </div>
        <div className="w-24"></div> {/* Placeholder div for spacing */}
      </div>
    </nav>
  );
};

export default Navbar;
