"use client"
import React from 'react'
import { Plus } from 'lucide-react'
import { CreateOrganization } from '@clerk/nextjs'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

type Props = {}

// [+] icon that creates new organizations inside sidebar


const NewButton = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <button className={`bg-white/25 h-full w-full rounded-md flex 
          items-center justify-center opacity-60 hover:opacity-100 transition`}>
            <Plus className='text-red-600'/>
          </button>
        </div>
      </DialogTrigger>

      <DialogContent className='p-0 bg-yellow-400 border-none max-w-[500px]'>
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  )
}

export default NewButton