import React from 'react'
import { Plus } from 'lucide-react'
import { OrganizationProfile } from '@clerk/nextjs'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

type Props = {}

const InviteButton = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant='success'>
          <Plus className='h-4 w-4 mr-1' />
          New Invite
        </Button>
      </DialogTrigger>
      <DialogContent className='p-0 bg-purple-400 border-none max-w-[900px]'>
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  )
}

export default InviteButton