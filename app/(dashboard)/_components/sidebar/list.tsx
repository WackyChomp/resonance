"use client"
import React from 'react'
import { useOrganizationList } from '@clerk/nextjs'
import Item from './item';


{/* Appends/shows all list of items based on item component */}

type Props = {}

const List = (props: Props) => {
  const { userMemberships } = useOrganizationList({
    userMemberships:{
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) return null;

  return (
    <ul className='space-y-3 bg-blue-300 rounded-md p-1'>
      {userMemberships.data?.map((mem) => (
        <p key={mem.organization.id}>
          <Item 
            key={mem.organization.id}
            id={mem.organization.id}
            name={mem.organization.name}
            imageUrl={mem.organization.imageUrl}            
          />
        </p>
      ))}
    </ul>
  );
};

export default List