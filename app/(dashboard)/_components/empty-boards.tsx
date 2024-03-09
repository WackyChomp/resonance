'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"

import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useOrganization } from "@clerk/nextjs"

type Props = {}

const EmptyBoards = (props: Props) => {
  const { organization } = useOrganization();
  const create = useMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    create({
      orgId: organization.id,
      title: 'Untilted'
    })
  }
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