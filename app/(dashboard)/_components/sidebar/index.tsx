import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='fixed z-1 left-0 bg-blue-900 h-full w-[80px] flex flex-col p-3 text-white'>
      Sidebar
    </div>
  )
}

export default Sidebar