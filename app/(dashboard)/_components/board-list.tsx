'use client'
import React from 'react'

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
      <div>This search does not work. Enter another search... </div>
    );
  }
  if (!data?.length && query.favorites){
    return(
      <div>No favorites here... </div>
    );
  }
  if (!data?.length){
    return(
      <div>No boards exist...Go create a new board! </div>
    );
  }

  return (
    <div>
      BoardList
      {JSON.stringify(query)}
    </div>
  )
}

export default BoardList