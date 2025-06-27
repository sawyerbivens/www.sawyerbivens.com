import { NewContactEmailTemplate } from "@/components/emails/new-contact";
import { type NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const url = req.nextUrl;
  const email = url.searchParams.get("email");

  try {
    if (email) {
      const { data: resendData, error: resendError } = await resend.emails.send(
        {
          from: "No Reply <no-reply@updates.sawyerbivens.com>",
          to: ["sawyerbivens06@gmail.com"],
          subject: `New contact: ${email}`,
          react: NewContactEmailTemplate({ email }),
        },
      );

      if (resendError) {
        return Response.json({ error: resendError }, { status: 500 });
      }

      return Response.json({ data: resendData }, { status: 200 });
    } else {
      return Response.json(
        { erorr: 'Missing required "email" query parameter.' },
        { status: 400 },
      );
    }
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
