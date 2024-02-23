import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="my-1.5">
      <p>Welcome to <u>Authenticated User</u> screen!</p>
    </div>
  );
}
