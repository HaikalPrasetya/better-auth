import { ResetPasswordForm } from "@/components/reset-password-form";
import { ReturnButton } from "@/components/return-button";

interface Props {
  searchParams: Promise<{ token: string }>;
}

export default async function Page({ searchParams }: Props) {
  const { token } = await searchParams;

  return (
    <div className="px-8 py-16 max-w-4xl container mx-auto space-y-8">
      <div className="space-y-8">
        <ReturnButton label="Login" href="/auth/login" />
        <h3 className="text-3xl font-bold">Reset Password</h3>
      </div>

      <p className="text-muted-foreground">
        Please enter your password. Make sure it is at least 6 characters
      </p>

      <ResetPasswordForm token={token} />
    </div>
  );
}
