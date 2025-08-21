import { ReturnButton } from "@/components/return-button";

interface Props {
  searchParams: Promise<{ error: string }>;
}

export default async function Page({ searchParams }: Props) {
  const { error } = await searchParams;

  return (
    <div className="px-8 py-16 max-w-4xl container mx-auto space-y-8">
      <div className="space-y-8">
        <ReturnButton label="Login" href="/auth/login" />
        <h3 className="text-3xl font-bold">Login Error</h3>
      </div>

      <p className="text-destructive">
        {error === "account_not_linked"
          ? "This account is already linked to another sign-in method"
          : "Oops! Something went wrong. Please try again."}
      </p>
    </div>
  );
}
