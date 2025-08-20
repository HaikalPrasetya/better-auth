import { RegisterForm } from "@/components/register-form";
import { ReturnButton } from "@/components/return-button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="px-8 py-16 max-w-4xl container mx-auto space-y-8">
      <div className="space-y-8">
        <ReturnButton label="Home" href="/" />
        <h3 className="text-3xl font-bold">Register</h3>
      </div>

      <RegisterForm />

      <p className="text-muted-foreground text-sm">
        Have an account?
        <Link href="/auth/login" className="hover:text-foreground">
          Login
        </Link>
      </p>
    </div>
  );
}
