import { genSalt, hash, compare } from "bcrypt";
import { ENV } from "../config/env.config";
import crypto from "crypto";

function base64url(buf: Buffer) {
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// system generated password
export const generateTemPassword = (): string => {
  const core = base64url(crypto.randomBytes(16));
  return `${core}!7`;
}

export const generateHash = async (password: string): Promise<string> => {
  const salt = await genSalt(ENV.SALT_ROUNDS);
  return await hash(password, salt);
};

export const compareHash = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return compare(password, hash);
};
