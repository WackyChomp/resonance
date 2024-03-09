import Image from 'next/image'
import React from 'react'
import { CreateOrganization } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

type Props = {}

/* Shows when there's no Clerk organization selected */

const EmptyOrg = (props: Props) => {
  return (
    <div className='bg-purple-300 h-[82vh] flex flex-col items-center justify-center'>
      <div className="bg-purple-500 flex flex-col items-center justify-center rounded-xl border-red-400">
        
        <h1 className='text-4xl font-semibold mt-5 mx-5'>
          Welcome to Resonance
        </h1>

        <Image 
          src='https://www.svgrepo.com/show/154524/online-collaboration.svg'
          alt='Empty-Image'
          height={100}
          width={100}
          className='m-5'
        />
        
        <div className="text-sm">
          Create an organization to get started!
        </div>

        <div className="m-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='success'>
              Create organization
              </Button>
            </DialogTrigger>
            <DialogContent className='p-0 bg-transparent border-none max-w-[500px]'>
              <CreateOrganization />
            </DialogContent>
          </Dialog>
        </div>

      </div>
    </div>
  )
}

export default EmptyOrg