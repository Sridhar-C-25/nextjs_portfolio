import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const BODY = await req.json();
    const { data, error } = await resend.emails.send({
      from: `${BODY?.name} <onboarding@resend.dev>`,
      to: ["codeaprogram@gmail.com"],
      subject: `Message from ${BODY?.name} `,
      react: EmailTemplate({
        name: BODY?.name,
        msg: BODY?.message,
        email: BODY?.email,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
