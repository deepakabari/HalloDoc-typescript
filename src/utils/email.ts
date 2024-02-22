import { createTransport, SentMessageInfo } from "nodemailer";
import {} from 'dotenv/config';


const transporter: SentMessageInfo = createTransport({
    service: "ethereal",
    auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export default transporter;
