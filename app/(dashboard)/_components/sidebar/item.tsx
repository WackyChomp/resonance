"use client"
import React from 'react'
import Image from 'next/image';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';

import { cn } from '@/lib/utils';   // dynamically style tailwind


// Contains the image and meta data for individual organization

type Props = {
  id: string;
  name: string;
  imageUrl: string;
}

const Item = ({ id, name, imageUrl }: Props) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  }

  return (
    <div>
      <Image
        width={100}
        height={100}
        alt={name}
        src={imageUrl}
        onClick={onClick}
        className={cn(
          "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
          isActive && "opacity-100"
        )}
      />
    </div>
  )
}

export default Item