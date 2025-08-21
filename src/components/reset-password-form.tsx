"use client";

import { resetPassword } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { CONFIG_FILES } from "next/dist/shared/lib/constants";

interface Props {
  token: string;
}

export function ResetPasswordForm({ token }: Props) {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData = new FormData(evt.target as HTMLFormElement);
    const password = String(formData.get("password"));

    if (!password) {
      return toast.error("Please enter your password");
    }
    const confirmPassword = String(formData.get("confirmPassword"));

    if (password !== confirmPassword) {
      return toast.error("Password do not match");
    }

    await resetPassword({
      newPassword: password,
      token,
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
          toast.success("Password reset sucessfully");
          router.push("/auth/login");
        },
      },
    });
  };

  return (
    <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">New Password</Label>
        <Input type="password" id="password" name="password" />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input type="password" id="confirmPassword" name="confirmPassword" />
      </div>

      <Button type="submit" disabled={isPending}>
        Resend Verification Email
      </Button>
    </form>
  );
}
