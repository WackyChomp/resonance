"use client"
import { ChangeEvent, useEffect, useState } from 'react'
import queryString from 'query-string'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'   // router only works in pages folder
import { Input } from '@/components/ui/input'
import { useDebounce } from 'use-debounce'


type Props = {}

const SearchInput = (props: Props) => {
  return ( 
    <div className='w-full relative'>
      <Search 
        className='absolute top-1/2 left-3 transform -translate-y-1/2  text-muted-foreground h-4 w-4'
      />
      <Input 
        className='w-full max-w[600px] pl-10'
        placeholder='Searching....'
      />
    </div>
  )
}

export default SearchInput