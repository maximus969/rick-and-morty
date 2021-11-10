import { ApolloError } from "@apollo/client";
import React, { useEffect, useState } from "react";
import s from './Results.module.css'

type CharacterType = {
  id: string
  name: string
  image: string
  status?: string
  gender?: string
}

type ResultType = {
  loading: boolean | undefined
  error: ApolloError | undefined
  data: {
    characters: {
      results: CharacterType[]
    }
  }
  setMortyImage: (value: string) => void
  setRickImage: (value: string) => void
}

export const Results: React.FC<ResultType> = ({
  loading,
  data,
  error,
  setRickImage,
  setMortyImage,
}) => {

  const [characters, setCharacters] = useState<CharacterType[]>([])

  useEffect(() => {
    if (data) setCharacters(data.characters.results)
    if (error) setCharacters([])
  }, [data, error])

  return (
    <div className={s.resultsContainer}>
      {error ? (
        <div>Error: {error.message} </div>
      ) : !loading ? (
        characters.map((character: CharacterType) => (
          <div key={character.id} className={s.imageContainer}>
            <img src={character.image} className={s.characterImage} alt='character_image'/>
          </div>
        ))
      ) : (
        <div>
          Loading...
        </div>
      )
    }
    </div>
  )
}