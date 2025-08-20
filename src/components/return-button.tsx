import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeftIcon } from "lucide-react";

interface Props {
  href: string;
  label: string;
}

export function ReturnButton({ href, label }: Props) {
  return (
    <Button size="sm" asChild>
      <Link href={href}>
        <ArrowLeftIcon /> {label}
      </Link>
    </Button>
  );
}
