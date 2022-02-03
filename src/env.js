//API DETAILS
/*
const DATABASE_URI = "mongodb+srv://admin:admin@cluster0.qf7xr.mongodb.net/test?authSource=admin&replicaSet=atlas-13uhbu-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
const DATABASE_USER = "admin"
const DATABASE_PASSWORD = "admin"
const DATABASE_DB = "miranda_db"*/

import axios from "axios";

/*let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";*/

//const apiUrl = 'https://miranda-express.azurewebsites.net/api/';
const apiUrl = "http://localhost:3000/api/";

let headers = {
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxZjkyNTg0ZGE3MjkwMDAzNTY1ZWU2MCJ9LCJpYXQiOjE2NDM3MTgxNTd9.SDoXsi-EDdIwRmXm487Ok1whGSfilbTK2rnG73LwLD4",
    "Content-Type": "application/json",
  },
};

export async function loginAPI(email, password) {
  return await axios
    .post(
      `${apiUrl}login/login`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      if (res.data.token) headers.headers.authorization = res.data.token;
      return res.data;
    })
    .catch((error) => {
      return error;
    });
}

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
