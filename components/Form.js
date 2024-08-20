import { useState } from 'react';

export default function CompanyForm() {
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [description, setDescription] = useState('');
  const [desiredTalent, setDesiredTalent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      companyName,
      contactEmail,
      description,
      desiredTalent,
    };

    const response = await fetch('/api/company-info', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto pt-32">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
          Company Name
        </label>
        <input
          id="companyName"
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter your company name"
          className="form-control block w-full px-4 py-3 rounded-sm bg-gray-200 text-base text-black placeholder-gray-500 focus:outline-none"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactEmail">
          Contact Email
        </label>
        <input
          id="contactEmail"
          type="email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
          placeholder="Enter your contact email"
          autoComplete="email"
          className="form-control block w-full px-4 py-3 rounded-sm bg-gray-200 text-base text-black placeholder-gray-500 focus:outline-none"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Company Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your company and its mission"
          className="form-control block w-full px-4 py-3 rounded-sm bg-gray-200 text-base text-black placeholder-gray-500 focus:outline-none"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="desiredTalent">
          Desired College Talent
        </label>
        <textarea
          id="desiredTalent"
          value={desiredTalent}
          onChange={(e) => setDesiredTalent(e.target.value)}
          placeholder="Describe the type of college talent you're looking to hire"
          className="form-control block w-full px-4 py-3 rounded-sm bg-gray-200 text-base text-black placeholder-gray-500 focus:outline-none"
          required
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
