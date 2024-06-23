// import { google } from 'googleapis';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const { email } = req.body;
//       const auth = new google.auth.GoogleAuth({
//         credentials: {
//             client_email: process.env.GOOGLE_CLIENT_EMAIL,
//             private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
//         },
//         // keyFile: 'C:\Users\edwin\seedstep\sheets\seedstep-00ffbdfd359a.json', // Path to your JSON key file
//         scopes: ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/spreadsheets'],
//       });

//       const sheets = google.sheets({ version: 'v4', auth });
//       const spreadsheetId = '1SXCJXWfUWAcPn_-CEo6Gm_83WAIOZpFNoJuyXrbYILE'; // Replace with your actual spreadsheet ID

//       // Write to the spreadsheet
//       await sheets.spreadsheets.values.append({
//         spreadsheetId,
//         range: 'Sheet1!A:A', // Assuming you're writing to column A
//         valueInputOption: 'USER_ENTERED',
//         resource: {
//           values: [[email]],
//         },
//       });

//       res.status(200).json({ message: 'Email sent successfully to Google Sheets' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error sending email to Google Sheets', error: error.toString() });

//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
