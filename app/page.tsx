import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-5">
      <h1>Hope or Nope!</h1>
      <p>Welcome to <u>Authenticated User</u> screen!</p>
      <Button size='lg' variant='mystery'>Hello</Button>
      <div className="">
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  );
}
