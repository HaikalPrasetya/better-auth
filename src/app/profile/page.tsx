import { ReturnButton } from "@/components/return-button";
import { SignOutButton } from "@/components/sign-out-button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <p className="text-destructive">Unauthorized</p>;
  }

  return (
    <div className="px-8 py-16 max-w-4xl container mx-auto space-y-8">
      <div className="space-y-8">
        <ReturnButton label="Home" href="/" />
        <h3 className="text-3xl font-bold">Profile</h3>
      </div>

      <SignOutButton />

      <pre className="text-sm overflow-clip">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
}
