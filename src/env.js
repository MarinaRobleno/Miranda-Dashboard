//API DETAILS
/*
const DATABASE_URI = "mongodb+srv://admin:admin@cluster0.qf7xr.mongodb.net/test?authSource=admin&replicaSet=atlas-13uhbu-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
const DATABASE_USER = "admin"
const DATABASE_PASSWORD = "admin"
const DATABASE_DB = "miranda_db"*/

import axios from "axios";

let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token")).token
  : "";

//const apiUrl = 'https://miranda-express.azurewebsites.net/api/';
const apiUrl = "http://localhost:3000/api/";

let headers = {
  headers: {
    authorization:
      `Bearer ${token}`,
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
