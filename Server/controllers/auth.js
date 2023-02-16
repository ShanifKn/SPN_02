import adminModel from "../models/adminModel.js";

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
