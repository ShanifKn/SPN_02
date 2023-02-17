import adminModel from "../models/adminModel.js";
import agentModel from "../models/agentModel.js";
import bcrypt from "bcrypt";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({ email: email });
    if (!admin) return res.status(400).json({ error: " Invalid credentials." });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ error: "Incorrect Password." });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);
    // * prevent password *//
    let Admin = admin.toObject();
    delete Admin.password;

    res.status(200).json({ token, Admin });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

// * Agent Registration *//
export const agentRegister = async (req, res) => {
  try {
    const { firstName, lastName, email, password, city, address, phone } =
      req.body;
    const image = req.file.location;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const agent = await agentModel.findOne({ email: email });
    if (!agent)
      return res
        .status(404)
        .send({ msg: "Use your registrated email address" });

    const updateAgent = await agentModel.updateOne(
      { email: email },
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
          password: hashedPassword,
          phone: phone,
          city: city,
          address: address,
          profile: image,
        },
      }
    );

    // console.log(updateAgent);
    return res.status(200).json({ msg: "New agent added" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
};
