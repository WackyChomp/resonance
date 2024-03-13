'use client'

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

import EmptySearch from './empty-search';
import EmptyFavorites from './empty-favorites';
import EmptyBoards from './empty-boards';
import BoardCard from './board-card';


{/* 
-Board list Shows 3 different states: ( search | favorites | boards )
-Toggle between const data to refresh if unable to fetch from boards api
*/}

interface Props {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  }
}

const BoardList = ({ orgId, query }: Props) => {
  //const data = []
  //const data = ['example 1','example 2','example 3']
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
  // {JSON.stringify(data)}
  return (
    <div>
      <h2 className='text-3xl'>{query.favorites ? "Favorite Boards" : "Team Boards"}</h2>
      {JSON.stringify(data)}
      <hr />
      <div className="">
        {data?.map((board) =>(
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorName={board.authorName}
            createdAt={board._creationTime}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  )
}

export default BoardList