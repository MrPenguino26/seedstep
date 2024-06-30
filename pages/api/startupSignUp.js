export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, company, industry, message } = req.body;
  
      try {
        const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY,
          },
          body: JSON.stringify({
            email: email,
            name: name,
            fields: {
              company: company,
              industry: industry,
              message: message,
            },
          }),
        });
  
        if (response.ok) {
          res.status(200).json({ message: 'Form data submitted successfully' });
        } else {
          const errorData = await response.json();
          res.status(response.status).json({ message: 'Failed to submit form data', error: errorData });
        }
      } catch (error) {
        res.status(500).json({ message: 'An error occurred while submitting the form', error });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  