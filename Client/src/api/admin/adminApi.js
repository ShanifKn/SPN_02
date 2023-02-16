import axios from "../axiosInstance";

//* LOGIN *//
export const login = async (email, password) => {
  try {
    const response = await axios.post(`/auth/admin/login`, { email, password });
    const data = response.data;
    return data;
  } catch (e) {
    return e.response;
  }
};

//* INVITE REQUEST *//
export const inviteAgent = async (Data) => {
  try {
    const response = await axios.post(`/admin/invite`, Data);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
