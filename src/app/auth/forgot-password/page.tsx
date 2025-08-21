import { ForgorPasswordForm } from "@/components/forgot-password-form";
import { ReturnButton } from "@/components/return-button";

export default function Page() {
  return (
    <div className="px-8 py-16 max-w-4xl container mx-auto space-y-8">
      <div className="space-y-8">
        <ReturnButton label="Login" href="/auth/login" />
        <h3 className="text-3xl font-bold">Success</h3>
      </div>

      <p className="text-muted-foreground">
        Please enter your email address to receive a password reset link.
      </p>

      <ForgorPasswordForm />
    </div>
  );
}
