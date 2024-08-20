import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function OurSecret() {
  return (
    <>
      <Head>
        <title>Our Secret</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-6">Our Secret</h1>
        <p className="text-center text-lg mb-8">
          There's no one better to connect you to the college market than college students.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          {/* Placeholder for co-founder 1 */}
          <div className="text-center flex flex-col items-center">
            <Image
              src="/images/student.jpg" // Update path as necessary
              alt="Co-founder 1"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="text-base mt-2 font-semibold">Armaan Parikh</p>
            <p className="text-sm mt-2">Vanderbilt '27</p>
          </div>
          {/* Placeholder for co-founder 2 */}
          <div className="text-center flex flex-col items-center">
            <Image
              src="/images/student.jpg" // Update path as necessary
              alt="Co-founder 2"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="text-based mt-2 font-semibold">Austin Mboijana</p>
            <p className="text-sm mt-2">Vanderbilt '26</p>
          </div>
        </div>
        <p className="text-center text-base">
          Co-Founders of SeedStep
        </p>
      </div>
    </>
  );
}
