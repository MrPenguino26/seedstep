import { useRouter } from 'next/router';

const ThankYou = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Thank You!</h1>
      <p className="text-lg mb-6">Your submission has been received successfully.</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleGoHome}
      >
        Go to Home Page
      </button>
    </div>
  );
}

export default ThankYou;
