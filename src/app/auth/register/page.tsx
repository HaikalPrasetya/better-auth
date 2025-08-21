import { RegisterForm } from "@/components/register-form";
import { ReturnButton } from "@/components/return-button";
import { SignInOauthButton } from "@/components/sign-in-oauth";
import Link from "next/link";

export default function Page() {
  return (
    <div className="px-8 py-16 max-w-4xl container mx-auto space-y-8">
      <div className="space-y-8">
        <ReturnButton label="Home" href="/" />
        <h3 className="text-3xl font-bold">Register</h3>
      </div>

      <div className="space-y-4">
        <RegisterForm />

        <p className="text-muted-foreground text-sm">
          Have an account?
          <Link href="/auth/login" className="hover:text-foreground">
            Login
          </Link>
        </p>
        <hr className="max-w-sm" />
      </div>

      <div className="flex flex-col max-w-sm gap-4">
        <SignInOauthButton provider="google" />
        <SignInOauthButton provider="github" />
      </div>
    </div>
  );
}
