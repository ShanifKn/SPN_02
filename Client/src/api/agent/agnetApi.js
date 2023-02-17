import axios from "../axiosInstance";

export const agentLogin = async (email, password) => {
  try {
  } catch (err) {}
};

//* AGENT REGISTERATION *//

export const agentRegister = async (formData) => {
  try {
    const form = new FormData();
    form.append("firstName", formData.firstName);
    form.append("lastName", formData.lastName);
    form.append("email", formData.email);
    form.append("password", formData.password);
    form.append("phone", formData.phone);
    form.append("city", formData.city);
    form.append("address", formData.address);
    form.append("image", formData.picture);

    const response = await axios.post("/auth/agent/register", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
