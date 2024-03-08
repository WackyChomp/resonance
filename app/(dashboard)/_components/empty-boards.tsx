import { Button } from "@/components/ui/button"
import Image from "next/image"

type Props = {}

const EmptyBoards = (props: Props) => {
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
        <Button size='lg'>
          Create Board
        </Button>
      </div>
    </div>
  )
}

export default EmptyBoards