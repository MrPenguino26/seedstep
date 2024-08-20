import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white text-black flex pt-32">
      {/* Left Half */}
      <div className="w-7/12 p-8 flex flex-col justify-center">
        <h1 className="text-5xl mb-4 font-heading">The gateway to premier college talent pool and critical insights for your business</h1>
        <p className="text-lg text-gray-800 font-body">
          SeedStep streamlines staffing and research by linking businesses with premier college talent and valuable market insights, enhancing your talent pool, cutting costs, and saving time.
        </p>
      </div>

      {/* Right Half */}
      <div className="w-5/12 p-8 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold mb-4 font-heading">We hire from elite institutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="w-full rounded-lg flex items-center justify-center">
            <Image src="/images/vanderbilt.jpg" alt="Descriptive text for the image" width={500} height={300} />
          </div>

          <div className="w-full rounded-lg flex items-center justify-center">
            <Image src="/images/duke.png" alt="Descriptive text for the image" width={500} height={300} />
          </div>
          <div className="w-full rounded-lg flex items-center justify-center">
            <Image src="/images/columbia.jpg" alt="Descriptive text for the image" width={500} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
