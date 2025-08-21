import { ReturnButton } from "@/components/return-button";
import { SendVerificationEmailForm } from "@/components/send-verification-email-form";
import { redirect } from "next/navigation";

interface Props {
  searchParams: Promise<{ error: string }>;
}

export default async function Page({ searchParams }: Props) {
  const { error } = await searchParams;

  if (!error) return redirect("/profile");

  return (
    <div className="px-8 py-16 max-w-4xl container mx-auto space-y-8">
      <div className="space-y-8">
        <ReturnButton label="Login" href="/auth/login" />
        <h3 className="text-3xl font-bold">Verify Email</h3>
      </div>

      <p className="text-destructive">
        {error === "invalid_token" || error === "token_expired"
          ? "Your token is invalid or expired. Please request again."
          : error === "email_not_verified"
          ? "Please verify your email, or request a new verification below"
          : "Oops! Something went wrong. Please try again."}
      </p>

      <SendVerificationEmailForm />
    </div>
  );
}
