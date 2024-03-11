'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"        // shadcn-ui Toaster notification
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useOrganization } from "@clerk/nextjs"

type Props = {}

const EmptyBoards = (props: Props) => {
  const { organization } = useOrganization();
  const mutate = useMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: 'Untilted'
    })
      .then((id) => {
        toast.success('Board Created!');
        // [ToDo] Proceeds to redirect to ---  board/{id}
      })
      .catch(() => 
        toast.error('Failed to create board :(')
      )
  };

  return (
    <div className='flex flex-col items-center m-7'>
      <Image 
        src='https://media1.tenor.com/m/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif'
        alt='emptiness'
        width={100}
        height={100}
      />

      <p>
        No boards exist...Go create a new board!
      </p>

      <div className="mt-7">
        <Button onClick={onClick} size='lg'>
          Create Board
        </Button>
      </div>
    </div>
  )
}

export default EmptyBoards