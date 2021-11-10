import React, { ChangeEvent } from "react";
import s from './Search.module.css'

type SearchType = {
  setSearchQuery: (value: string) => void
  searchQuery: string
}

export const Search: React.FC<SearchType> = ({
  searchQuery,
  setSearchQuery,
}) => {

  const searchingHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value)
  }

  return (
    <div className={s.searchContainer}>
      <input className={s.input} 
        placeholder='type name'
        value={searchQuery}
        onChange={searchingHandle}
      />
    </div>
  )
}