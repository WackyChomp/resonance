import React from 'react'
import { UserButton } from '@clerk/nextjs'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='bg-green-500 flex items-center gap-x-5 p-5'>
      <p>Navbar</p>
      <div className='hidden lg:flex lg:flex-1 bg-blue-700'>
        search
      </div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Navbar