'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { cn } from '@/lib/utils'
import { OrganizationSwitcher } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'
import { LayoutDashboard, Star } from 'lucide-react'

import { useSearchParams } from 'next/navigation'

type Props = {}

const font = Roboto({
  subsets: ['latin'],
  weight: ['700']
})

const OrgSidebar = (props: Props) => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  return (
    <div className='hidden lg:flex flex-col space-y-10 w-[200px] px-3 pt-5 bg-purple-400'>
      <Link href='/'>
      <div className="flex items-center gap-x-2 border rounded-xl border-blue-800">
        <Image 
          src='/logoipsum-245.svg'
          alt='logo-here'
          width={50}
          height={50}
        />
        <span className={cn("font-semibold text-lg", font.className)}>Resonance</span>
      </div>
      </Link>

      <OrganizationSwitcher 
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
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

      <div className="space-y-5 w-full">
        <Button
          variant={favorites ? "ghost" : "mystery"}
          asChild
          size='lg'
          className='font-normal justify-start w-full'
        >
          <Link href='/'>
            <LayoutDashboard className='h-4 w-4 mr-2'/>
            Squad Boards
          </Link>
        </Button>

          <Button
            variant={favorites ? "mystery" : "ghost"}
            asChild
            size='lg'
            className='font-normal justify-start w-full'
          >
            <Link href={{
              pathname: '/',
              query: { favorites: true }
            }}>
              <Star className='h-4 w-4 mr-2'/>
              Favorite Boards
            </Link>
          </Button>

      </div>
    </div>
  )
}

export default OrgSidebar