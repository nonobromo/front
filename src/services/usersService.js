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
    const { _id, creator, isAdmin } = jwtDecode(token);
    return { _id,  creator, isAdmin };
  } catch {
    return null;
  }
}

getUser()

export async function getUserData(id) {
  const  userData  = await httpServices.get(`/users/${id}`, getJWT())
  return userData;
}

export async function getAllusers(){
  const data = await httpServices.get("/users/allUsers");

  const users = [];
   
  for (const d of data.data){
    const keyId = d._id;
    const fullNameKey = `${d.name.first} ${d.name.last}`;
    users.push({id: keyId, fullName: fullNameKey}); 
  }
  
  return users;
}





export function logOut() {
  setToken(null);
}
