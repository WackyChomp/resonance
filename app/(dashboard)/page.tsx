"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";
import { useOrganization } from "@clerk/nextjs";

export default function Home() {
  const { organization } = useOrganization();

  return (
    <div className="my-1 bg-blue-400 flex-1 h-[calc(100%-80px)]">
      <p className='bg-red-300 p-0.5'>Welcome to <u>Authenticated User</u> screen!</p>
      <p className="p-0.5">DashboardLayout</p>

      {!organization ? (
        <EmptyOrg/>
        ): (
          <div className="flex flex-col h-[82vh] items-center justify-center">
            <div className="bg-yellow-400 p-5 rounded-xl">            
              <p>Organization exists, no need to create new organization</p>
            </div>
          </div>
        )}
    </div>
  );
}
