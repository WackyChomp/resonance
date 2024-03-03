'use client'

import React from 'react'
import { OrganizationSwitcher, UserButton, useOrganization } from '@clerk/nextjs'
import SearchInput from './search-input'
import InviteButton from './invite-button'

type Props = {}

const Navbar = (props: Props) => {

  const { organization } = useOrganization();

  return (
    <div className='bg-purple-400 flex items-center gap-x-5 p-4'>
      <p>Navbar</p>

      <div className='hidden lg:flex lg:flex-1 bg-blue-700'>
        <SearchInput />
      </div>

      {/* Show Clerk OrganizationSwitcher on screen smaller than laptop */}
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher 
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '400px',
              },
              organizationSwitcherTrigger: {
                padding: '6px',
                width: '100%',
                borderRadius: '10px',
                border: '1px solid red',
                justifyContent: 'space-between',
                backgroundColor: 'lightblue',
              }
            }
          }}
        />
      </div>

      {/* Only shows InviteButton when there's an org selected */}
      {organization && (
        <InviteButton/>
      )}

      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Navbar