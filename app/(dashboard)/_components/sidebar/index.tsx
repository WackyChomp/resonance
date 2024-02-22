import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='fixed z-1 left-0 bg-purple-500 h-full w-[140px] flex flex-col p-3 gap-y-10 text-white'>
      Sidebar
    </div>
  )
}

export default Sidebar