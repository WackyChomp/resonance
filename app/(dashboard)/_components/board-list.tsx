'use client'

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
  const data = []   // API call goes here

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
  return (
    <div>
      BoardList
      {JSON.stringify(query)}
    </div>
  )
}

export default BoardList