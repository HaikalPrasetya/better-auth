import { LoginForm } from "@/components/login-form";
import { ReturnButton } from "@/components/return-button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="px-8 py-16 max-w-4xl container mx-auto space-y-8">
      <div className="space-y-8">
        <ReturnButton label="Home" href="/" />
        <h3 className="text-3xl font-bold">Login</h3>
      </div>

      <LoginForm />

      <p className="text-muted-foreground text-sm">
        Don&apos;t have an account?
        <Link href="/auth/register" className="hover:text-foreground">
          Register
        </Link>
      </p>
    </div>
  );
}
