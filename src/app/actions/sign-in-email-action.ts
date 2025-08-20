"use server";

import { auth } from "@/lib/auth";
import { parseSetCookieHeader } from "better-auth/cookies";
import { cookies, headers } from "next/headers";

export async function signInEmailAction(formData: FormData) {
  const email = String(formData.get("email"));
  if (!email) return { error: "Please enter your email" };

  const password = String(formData.get("password"));
  if (!password) return { error: "Please enter your password" };

  try {
    await auth.api.signInEmail({
      headers: await headers(),
      body: {
        email,
        password,
      },
    });

    return { error: null };
  } catch (error) {
    if (error instanceof Error) {
      return { error: "Oops! Something went wrong while sign in" };
    }

    return { error: "Internal server error" };
  }
}
