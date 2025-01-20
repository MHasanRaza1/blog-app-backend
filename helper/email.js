import { passwordResetEmailTemplate, verificationEmailTemplate, welcomeEmailTemplate } from "./emailTemplate.js";
import transporter from "./nodemailer.js";
import dotenv from "dotenv";

dotenv.config();

export const sendCode = async (email, otp, name) => {
    try {
        const response = await transporter.sendMail({
            from: `"Magenta Blog" <${process.env.MY_EMAIL}>`, // sender address
            to: email, // list of receivers
            subject: "Verify your Email", // Subject line
            text: "Verify your Email", // plain text body
            html: verificationEmailTemplate.replace("{{otp}}",otp).replace("{{name}}",name), // html body
          });
          console.log(email,name)
          console.log("Email send successfully")
    } catch (error) {
        console.log(error)
    }
};

export const welcome = async (email, name) => {
    try {
        const response = await transporter.sendMail({
            from: `"Magenta Blog" <${process.env.MY_EMAIL}>`, // sender address
            to: email, // list of receivers
            subject: "Welcome Email", // Subject line
            text: "Welcome Email", // plain text body
            html: welcomeEmailTemplate.replace("{{name}}",name), // html body
          });
          console.log("Email send successfully")
    } catch (error) {
        console.log(error)
    }
};

export const resetPasswordCode = async (email, name, otp) => {
    try {
        const response = await transporter.sendMail({
            from: `"Magenta Blog" <${process.env.MY_EMAIL}>`, // sender address
            to: email, // list of receivers
            subject: "Welcome Email", // Subject line
            text: "Welcome Email", // plain text body
            html: passwordResetEmailTemplate.replace("{{name}}",name).replace("{{otp}}", otp), // html body
          });
          console.log("Email send successfully")
    } catch (error) {
        console.log(error)
    }
};