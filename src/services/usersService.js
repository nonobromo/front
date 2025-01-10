import { func } from "joi";
import httpServices, { setDefaultCommonHeaders } from "./httpService";
import { jwtDecode } from "jwt-decode";
const TOKEN_KEY = "token";

refreshToken();

function refreshToken() {
  setDefaultCommonHeaders("x-auth-token", getJWT());
}

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
  refreshToken();
}

function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

export function createUser(user) {
  return httpServices.post("/users", user);
}

export async function signIn(credentials) {
  const response = await httpServices.post("/auth", credentials);
  setToken(response.data.token);
  return response;
}

export function getUser() {
  try {
    const token = getJWT();
    const { _id, biz } = jwtDecode(token);
    return { _id, biz };
  } catch {
    return null;
  }
}

export async function getUserData() {
  const { data } = await httpServices.get(`/users/me`, getJWT());
  return data;
}

export function logOut() {
  setToken(null);
}
