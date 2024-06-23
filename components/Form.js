import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
      
      setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          autoComplete="email"
          className="form-control block w-full px-4 py-3 rounded-l-sm bg-gray text-base text-black placeholder-gray-500 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="rounded-r-sm bg-activeButton py-3 px-4 font-medium text-white bg-black shadow hover:bg-activeButtonHover disabled:cursor-not-allowed disabled:bg-activeButtonDisabled"
          disabled={email === "" || loading}
        >
          {loading ? 'Submitting...' : 'Join Waitlist'}
        </button>
      </div>
    </form>
  );
}
