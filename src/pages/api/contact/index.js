import { Client } from "@notionhq/client";

const handler = async (req, res) => {
  const notionClient = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  const { name, email, message } = req.body;
  const date = new Date().toISOString();

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }

  try {
    await notionClient.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Date: {
          date: {
            start: date,
          },
        },
        Text: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    return res.status(200).json({ message: "Success!" });
  } catch {
    return res.status(500).json({ message: "Error!" });
  }
};

export default handler;
