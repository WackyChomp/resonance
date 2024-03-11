'use client'

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

import EmptySearch from './empty-search';
import EmptyFavorites from './empty-favorites';
import EmptyBoards from './empty-boards';


{/* Board list Shows 3 different states: ( search | favorites | boards ) */}

interface Props {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  }
}

const BoardList = ({ orgId, query }: Props) => {
  // const data = []
  const data = useQuery(api.boards.get, {orgId});   // API call goes here

  // use undefined check to determine whether data is loading or not
  if (data === undefined){
    return(
      <div>
        Loading...
      </div>
    )
  }

  if (!data?.length && query.search){
    return(
      <div>
        <EmptySearch />
      </div>
    );
  }
  if (!data?.length && query.favorites){
    return(
      <div>
        <EmptyFavorites />
      </div>
    );
  }
  if (!data?.length){
    return(
      <div>
        <EmptyBoards />
      </div>
    );
  }

  // This renders if either above conditions fail
  // {JSON.stringify(query)}
  return (
    <div>
      <h2 className='text-3xl'>{query.favorites ? "Favorite Boards" : "Team Boards"}</h2>
      {JSON.stringify(data)}
    </div>
  )
}

export default BoardList