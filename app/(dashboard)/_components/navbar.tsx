import React from 'react'
import { UserButton } from '@clerk/nextjs'
import SearchInput from './search-input'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='bg-green-500 flex items-center gap-x-5 p-5'>
      <p>Navbar</p>
      <div className='hidden lg:flex lg:flex-1 bg-blue-700'>
        <SearchInput />
      </div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Navbar