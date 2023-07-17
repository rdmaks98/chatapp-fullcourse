// // const sgMail = require("@sendgrid/mail");
// // sgMail.setApiKey(process.env.SG_KEY);

// const sendSGMail = async ({
//   to,
//   sender,
//   subject,
//   html,
//   attachments,
//   text,
// }) => {
//   try {
//     const from = "helpdesk.codeintelli@gmail.com";

//     const msg = {
//       to: to, // Change to your recipient
//       from: from, // Change to your verified sender
//       subject: subject,
//       html: html,
//       // text: text,
//       attachments,
//     };


//     return sgMail.send(msg);
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.sendEmail = async (args) => {
//   if (!process.env.NODE_ENV === "development") {
//     return Promise.resolve();
//   } else {
//     return sendSGMail(args);
//   }
// };
var nodeMailer = require('nodemailer');
exports.sendEmail = async (options) => {
  //   const accessToken = await OAuth2Client.getAccessToken();
  try {
    const transporter = nodeMailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      service: process.env.SMTP_SERVICE,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: options.to,
      subject: options.subject,
      html: options.html,
    };
    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }

  //   res.status(200).json({ success: true, message: "mail send successfully" });
};