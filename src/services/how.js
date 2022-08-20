import axios from "axios";

const apiURL = axios.create({
  baseURL: "http://164.92.135.174",
  withCredentials: false,
});

const api = axios.create({
  baseURL: process.env.REACT_APP_REST_API_URL,
  withCredentials: false,
});

export const getHowToText = (inputTerm, length) => {
  const query = { inputTerm, length };

  return api
    .get(`/howto?${new URLSearchParams(query).toString()}`)
    .then((response) => response.data.resultAPI.data);

  // The API call to the hosted model does not work because of CORS

  // let term = "How to " + inputTerm;
  // term = term.replace(/ /g, "%20") + String(300);

  // const headers = {
  //   accept: "application/json",
  //   "Access-Control-Allow-Origin": "*",
  // };

  // return apiURL
  //   .get(`/answers?user_prompt=${term}`, { headers })
  //   .then((response) => console.log(response));
};
