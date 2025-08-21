"use server";

import { auth, ErrorCode } from "@/lib/auth";
import { parseSetCookieHeader } from "better-auth/cookies";
import { cookies, headers } from "next/headers";
import { APIError } from "better-auth/api";
import { redirect } from "next/navigation";

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
    if (error instanceof APIError) {
      const errCode = error.body ? (error.body.code as ErrorCode) : "UNKNOWN";

      switch (errCode) {
        case "EMAIL_NOT_VERIFIED": {
          redirect("/auth/verify?error=email_not_verified");
        }
        default: {
          return { error: error.message };
        }
      }
    }

    return { error: "Internal server error" };
  }
}
