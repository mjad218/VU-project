"use server";

import { cookies } from "next/headers";

export async function setCookie(
  key: string,
  value: string | undefined,
  options?: any
) {
  const oneDay = 24 * 60 * 60 * 1000;

  cookies().set(key, value ?? "", {
    httpOnly: true,
    path: "/",
    maxAge: oneDay,
  });
}

export async function getCookie(key: string) {
  return cookies().get(key);
}
