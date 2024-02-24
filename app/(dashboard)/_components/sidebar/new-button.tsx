"use client"
import React from 'react'
import { Plus } from 'lucide-react'
import { CreateOrganization } from '@clerk/nextjs'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

type Props = {}

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
    </Dialog>
  )
}

export default NewButton