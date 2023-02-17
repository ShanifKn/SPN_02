import * as dotenv from "dotenv";
dotenv.config();
import agentModel from "../models/agentModel.js";
import nodemailer from "nodemailer";
import { verify } from "jsonwebtoken";

// * CODE GENERATOR *//
const generateVerficationCode = () => {
  return Math.floor(500000 + Math.random() * 5000000);
};

// * NODE MAILER CONFIGURATION *//
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});


// * INVITIATION *//
export const inviteAgent = async (req, res) => {
  try {
    const { email, name } = req.body;
    const agentFind = await agentModel.findOne({ email: email });
    if (agentFind) return res.status(404).json({ msg: "user already exist" });
    // * SEND MAIL *//
    const generateCode = generateVerficationCode();
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Invitation to join  tickety",
      html: `Hello ${name},<br><br>
      You have been invited to join tickety as an agent. Please click on the following link to verify your account and create a password:<br><br>
      <a href="${process.env.VERIFY_URL}/verify-token/${generateCode}">Verify Account</a><br><br>
      Best regards,<br>
      Tickety Team`,
    };
    await transporter.sendMail(mailOptions);

    //* CREATEING NEW USER *//
    const agent = new agentModel({
      email,
      verficationCode: generateCode,
    });
    await agent.save();
    res.status(200).json({ msg: "New invitation was created successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: error });
  }
};

// * VERFIY CODE *//
export const verifyMail = async (req, res) => {
  try {
    const { generateCode } = req.params;
    const agent = await agentModel.findOne({ verficationCode: generateCode });
    if (!agent) return res.status(404).send({ message: "Invalid token" });
    await agentModel.updateOne(
      { email: agent.email },
      {
        $set: { approvalStatus: true },
      }
    );
    res.redirect(`${process.env.SIGNUP_URL}`);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};
