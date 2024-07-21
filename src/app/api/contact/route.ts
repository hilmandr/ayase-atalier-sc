import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      // service: "zoho",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MY_APP_EMAIL,
        pass: process.env.MY_APP_PASS,
      },
    });

    const mailOption = {
      from: email,
      to: process.env.MY_EMAIL_RECIEVER,
      replyTo: email,
      subject: "Send Email Tutorial",
      html: `
        <h3>Hello ${name}</h3>
        <li> message: ${message}</li> 
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 },
    );
  }
}

// export async function POST(
//   req: Request,
//   res: {
//     status: (arg0: number) => {
//       (): any;
//       new (): any;
//       json: { (arg0: { error: string }): any; new (): any };
//     };
//   }
// ) {
//   const { name, email, message } = await req.json();
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.MY_APP_EMAIL,
//       pass: process.env.MY_APP_PASS,
//     },
//   });
//   try {
//     await transporter.sendMail({
//       from: email,
//       to: process.env.MY_EMAIL_RECIEVER,
//       replyTo: email,
//       subject: `Anda mendapatkan pesan dari ${name}`,
//       html: `<p>Anda mendapatkan pesan dari ${name} | ${email}</p><br>
//         <p>${message}</p><br>`,
//     });
//   } catch (error) {
//     const err = error as Error;
//     err.message;
//     return res.status(500).json({ error: err.message || err.toString() });
//   }

//   return res.status(200).json({ error: "" });
// }
