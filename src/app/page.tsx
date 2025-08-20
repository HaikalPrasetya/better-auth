import { GetStartedButton } from "@/components/get-started-button";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-dvh">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-6xl font-bold">Better Authy</h1>
        <GetStartedButton />
      </div>
    </div>
  );
}
