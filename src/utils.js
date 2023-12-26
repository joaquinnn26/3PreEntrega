import { dirname } from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "./config/config.js"
const SECRET_KEY_JWT = config.secret_jwt


export const __dirname = dirname(fileURLToPath(import.meta.url));


export const hashData = async (data) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(data, salt);
  };
  
export const compareData = async (data, hashedData) => {
  return bcrypt.compare(data, hashedData);
};

export const generateToken = (user) => {
  const token = jwt.sign(user, config.secret_jwt, { expiresIn: 300 });
  console.log("token", token);
  return token;
};