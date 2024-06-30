import { useRouter } from 'next/router';

const Support = () => {
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
        <h1 className="text-4xl font-bold mb-4">For Students</h1>
        <p className="text-lg mb-6">
          Connect with innovative startups and gain real-world experience while you're still in college. Explore internships, part-time roles, and project-based work that aligns with your career goals.
        </p>
        <button
          className="bg-white text-black font-bold py-2 px-4 rounded"
          onClick={handleBrowseStartups}
        >
          Browse Startups
        </button>
      </div>
      <div className="w-1/2 text-white flex flex-col justify-center items-center px-8 relative">
        <h1 className="text-4xl font-bold mb-4">For Startups</h1>
        <div className="text-lg mb-6 space-y-4">
          <p>
            Connect with motivated college students eager to gain real-world experience. Get tailored insights specific to your industry and business needs.
          </p>
        </div>
        <button
          className="bg-white text-black font-bold py-2 px-4 rounded"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
      <div className="absolute inset-y-0 left-1/2 w-0.5 bg-gradient-to-b from-black to-white"></div>
    </div>
  );
}

export default Support;
