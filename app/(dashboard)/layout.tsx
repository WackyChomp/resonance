import React from 'react'
import Sidebar from './_components/sidebar';
import OrgSidebar from './_components/org-sidebar';
import Navbar from './_components/navbar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className='h-full'>
      <Sidebar />
      <div className='pl-[80px] h-full'>
        <div className='flex gap-x-5 h-full'>
          <OrgSidebar/>
          <div className='h-full flex-1'>
            <Navbar />
            {children}
            <h1 className='bg-red-500 h-[85vh]'>DashboardLayout</h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DashboardLayout