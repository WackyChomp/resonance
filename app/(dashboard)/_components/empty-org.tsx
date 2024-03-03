import Image from 'next/image'
import React from 'react'

type Props = {}

/* Shows when there's no Clerk organization selected */

const EmptyOrg = (props: Props) => {
  return (
    <div className='bg-purple-300 h-[82vh] flex flex-col items-center justify-center'>
      <div className="bg-orange-500 flex flex-col items-center justify-center rounded-xl border-red-400">
        
        <h1 className='text-4xl font-semibold mt-5 mx-5'>
          Welcome to Resonance
        </h1>

        <Image 
          src='/Saly-25.svg'
          alt='Empty-Image'
          height={200}
          width={200}
          className='m-5'
        />
        
        <div className="bg-yellow-300 p-2 mb-5 rounded-xl">
          Create an organization to get started!
        </div>

      </div>
    </div>
  )
}

export default EmptyOrg