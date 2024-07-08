import { useRouter } from 'next/router';
import config from "@/config/general";

const Support = () => {
  const { title1, title2, description1, description2, button1, button2} = config.contents.support;
  const router = useRouter();

  const handleBrowseStartups = () => {
    router.push('/browse-startups');
  }

  const handleSignUp = () => {
    router.push('/signup');
  }

  return (
    <div className="flex h-screen bg-black relative">
      <div className="w-1/2 text-white flex flex-col justify-center items-center px-8 relative">
        <h1 className="text-4xl font-bold mb-4">{title1}</h1>
        <p className="text-lg mb-6">
          {description1}
        </p>
        <button
          className="bg-white text-black font-bold py-2 px-4 rounded"
          onClick={handleBrowseStartups}
        >
          {button1}
        </button>
      </div>
      <div className="w-1/2 text-white flex flex-col justify-center items-center px-8 relative">
        <h1 className="text-4xl font-bold mb-4">{title2}</h1>
        <div className="text-lg mb-6 space-y-4">
          <p>
            {description2}
          </p>
        </div>
        <button
          className="bg-white text-black font-bold py-2 px-4 rounded"
          onClick={handleSignUp}
        >
          {button2}
        </button>
      </div>
      <div className="absolute inset-y-0 left-1/2 w-0.5 bg-gradient-to-b from-black to-white"></div>
    </div>
  );
}

export default Support;
