import { setCookie } from "cookies-next";

export const setCookieColorscheme = (scheme: "light" | "dark") => {
  setCookie("colorScheme", scheme);
};
