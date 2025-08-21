"use server";

import transporter from "@/lib/nodemailer";

export async function sendEmailAction({
  to,
  meta,
  subject,
}: {
  to: string;
  subject: string;
  meta: {
    description: string;
    link: string;
  };
}) {
  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to,
    subject: `Better Auth - ${subject}`,
    html: `
        <div>
            <h1>${subject}</h1>
            <p>${meta.description}</p>
            <a href="${meta.link}">Click here</a>
        </div>
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: false };
  } catch (error) {
    console.error("SendEmailAction", error);
    return { success: false };
  }
}
