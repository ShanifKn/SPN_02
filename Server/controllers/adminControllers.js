// * CODE GENERATOR *//
const generateVerficationCode = () => {
  return Math.floor(5000 + Math.random() * 5000);
};

export const inviteAgent = async (req, res) => {
  try {
    const { email, name } = req.body;
    const generateCode = generateVerficationCode();

    
  } catch (error) {
    console.log(err.message);
  }
};
