import React from 'react'
import Sidebar from './_components/sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className='h-full'>
      <Sidebar />
      <div className='pl-[150px] h-full'>
        <h1>DashboardLayout</h1>
        {children}
      </div>
    </main>
  )
}

export default DashboardLayout