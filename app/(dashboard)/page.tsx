import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";

export default function Home() {
  return (
    <div className="my-1 bg-blue-400 flex-1 h-[calc(100%-80px)]">
      <p className='bg-red-300 p-0.5'>Welcome to <u>Authenticated User</u> screen!</p>
      <p className="p-0.5">DashboardLayout</p>
      <EmptyOrg/>
    </div>
  );
}
