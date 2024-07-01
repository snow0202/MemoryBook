const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/send-email', async(req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
    });

    const ReceiveMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `${name}から問い合わせ`,
        text: `Email: ${email}\n\n本文: ${message}`,
    }

    try {
        await transporter.sendMail(ReceiveMailOptions);
        res.status(200).json({ status: 'メールが送信された' });
    } catch(error) {
        console.log(error);
        res.status(500).json({ status: 'メールが失敗しました' });
    }
});

app.listen(port, () => {
  console.log(`サーバーが ${port} で起動しました`);
});
