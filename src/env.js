import axios from "axios";

let token = localStorage.getItem("token")
  ? localStorage.getItem("token").token
  : "";

const apiUrl = "https://miranda-back.vercel.app/api/";
//const apiUrl = "http://localhost:3000/api/";

export const apiLogin = "https://miranda-back.vercel.app/";
// export const apiLogin = "http://localhost:3000/";

let headers = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
};

export async function postAPI(url, body) {
  return await axios
    .post(`${apiUrl}${url}`, body, headers)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
}

export async function getAPI(url) {
  return await axios
    .get(`${apiUrl}${url}`, headers)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
}

export async function deleteAPI(url, id) {
  return await axios
    .delete(`${apiUrl}${url}/${id}`, headers)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
}

export async function patchAPI(url, id, body) {
  return await axios
    .patch(`${apiUrl}${url}/${id}`, body, headers)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
}
