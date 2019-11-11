import User from "./user";

export default interface AuthPayload {
  user?: User;
  token?: string;
}
