import axios from "axios";

const api = "https://codeapi.ashutosh-sharma.com"

export const addContent = async (data) => {
  try {
    const resp = await axios.post(`${api}/content/add`,data);
    return resp.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateContent = async (data,id) => {
    const formdata = {
        title:data.title,
        lang:data.lang,
        content:data.content
      }

  try {
    const resp = await axios.put(`${api}/content/update/${id}`,formdata);
    return resp.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const DeleteContent = async (id) => {
  try {
    const resp = await axios.delete(`${api}/content/delete/${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};