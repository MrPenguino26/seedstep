const BrowseStartups = () => {
    const startups = [
      { name: 'Tech Innovators', industry: 'Technology', location: 'San Francisco, CA' },
      { name: 'Health Pioneers', industry: 'Healthcare', location: 'Austin, TX' },
      { name: 'Eco Warriors', industry: 'Environmental', location: 'Portland, OR' },
      { name: 'EduTech', industry: 'Education', location: 'New York, NY' },
      { name: 'FinTech Leaders', industry: 'Finance', location: 'Chicago, IL' },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-8">Browse Startups</h1>
        <table className="table-auto bg-white shadow-lg rounded-lg w-3/4">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Startup Name</th>
              <th className="px-4 py-2 border-b">Industry</th>
              <th className="px-4 py-2 border-b">Location</th>
            </tr>
          </thead>
          <tbody>
            {startups.map((startup, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{startup.name}</td>
                <td className="px-4 py-2 border-b">{startup.industry}</td>
                <td className="px-4 py-2 border-b">{startup.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default BrowseStartups;
  