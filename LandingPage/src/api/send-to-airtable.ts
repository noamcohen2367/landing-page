// pages/api/send-to-airtable.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email } = req.body;

  try {
    const response = await axios.post(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
      {
        records: [
          {
            fields: {
              Name: name,
              Email: email,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res
      .status(200)
      .json({ message: 'Data sent successfully!', data: response.data });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Something went wrong sending data to Airtable.' });
  }
}
