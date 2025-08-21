"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";

interface Props {
  provider: "google" | "github";
  signUp?: boolean;
}

export function SignInOauthButton({ provider, signUp }: Props) {
  const [isPending, setIsPending] = useState(false);

  const handleClick = async () => {
    await signIn.social({
      provider,
      callbackURL: "/profile",
      errorCallbackURL: "/auth/login/error",
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onResponse: () => {
          setIsPending(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      },
    });
  };

  const action = signUp ? "Up" : "In";
  const providerName = provider === "google" ? "Google" : "Github";

  return (
    <Button onClick={handleClick} disabled={isPending}>
      Sign {action} with {providerName}
    </Button>
  );
}
