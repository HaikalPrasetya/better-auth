"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";
import { useState } from "react";

export function SignOutButton() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const handleLogout = async () => {
    await signOut({
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
        onSuccess: () => {
          router.push("/auth/login");
        },
      },
    });
  };

  return (
    <Button
      onClick={handleLogout}
      variant="destructive"
      size="sm"
      disabled={isPending}
    >
      Sign Out{" "}
    </Button>
  );
}
