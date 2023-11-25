import axios from "axios";
import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
});

const WEBHOOK_URL = process.env.WEBHOOK_URL!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = bodySchema.parse(body);

    const messageData = {
      embeds: [
        {
          type: "rich",
          title: "",
          description: "",
          color: 0x00ffff,
          fields: [
            {
              name: `Nome `,
              value: name,
              inline: true,
            },
            {
              name: `Email`,
              value: email,
              inline: true,
            },
            {
              name: `Mensagem`,
              value: message,
            },
          ],
          footer: {
            text: `Marcos Dev`,
            icon_url: `https://media.graphassets.com/biuNxyT5Tma6Hn7nwe7k`,
          },
        },
      ],
    };

    await axios.post(WEBHOOK_URL, messageData);

    return NextResponse.json("Mensagem enviada com sucesso!");
  } catch (err) {
    console.log(err);
    return NextResponse.error;
  }
}
