import React from 'react'
import NewButton from './new-button'
import List from './list'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='fixed z-1 left-0 bg-blue-900 h-full w-[80px] flex flex-col p-3 text-white'>
      Sidebar
      <hr className='m-3'/>
      <List />
      <hr className='m-3'/>
      <NewButton />
    </div>
  )
}

export default Sidebar