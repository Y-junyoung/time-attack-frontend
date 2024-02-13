import { Client } from "./index.api";

async function signUp(dto: { email: string; pw: string }) {
  await Client.post<Response>("/auth/sign-up", dto);
}

async function logIn(dto: { email: string; pw: string }) {
  await Client.post<Response>("/auth/log-in", dto);
}

async function logOut() {
  await Client.delete<Response>("/auth/log-out");
}

async function refreshToken() {
  await Client.get<Response>("/auth/refresh-token");
}

const auth = {
  signUp,
  logIn,
  logOut,
  refreshToken,
};

export default auth;
