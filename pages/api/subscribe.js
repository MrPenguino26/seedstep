// pages/api/subscribe.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email } = req.body;
      const API_KEY = process.env.MAILERLITE_API_KEY;  // Ensure to set this in your environment variables
      const GROUP_ID = process.env.MAILERLITE_GROUP_ID;          // Replace with your actual MailerLite group ID
  
      try {
        const response = await fetch(`https://api.mailerlite.com/api/v2/groups/${GROUP_ID}/subscribers`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-MailerLite-ApiKey': API_KEY
          },
          body: JSON.stringify({
            email: email,
            type: 'active'
          })
        });
  
        const data = await response.json();
        if (response.ok) {
          res.status(200).json({ message: 'Subscription successful', data });
        } else {
          res.status(500).json({ message: 'Failed to subscribe', data });
        }
      } catch (error) {
        res.status(500).json({ message: 'Server error', error });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  