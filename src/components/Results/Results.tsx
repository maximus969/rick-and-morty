import { ApolloError } from "@apollo/client";
import React, { useEffect, useState } from "react";
import s from './Results.module.css'
import { CloseCircleTwoTone } from '@ant-design/icons'

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

  const onImageClickHandler = (character: CharacterType) => {
    character.name.match(/rick/i) && setRickImage(character.image)
    character.name.match(/morty/i) && setMortyImage(character.image)
  }

  const onDeleteHandler = (id: string) => {
    setCharacters(characters.filter((character) => character.id !== id))
  }

  return (
    <div className={s.resultsContainer}>
      {error ? (
        <div>Error: {error.message} </div>
      ) : !loading ? (
        characters.map((character: CharacterType) => (
          <div key={character.id} className={s.imageContainer}>
            <CloseCircleTwoTone
              onClick={() => onDeleteHandler(character.id)}
              className={s.closeSircle}
              style={{
                position: "absolute",
                left: "140px",
                top: "10px",
                fontSize: "25px",
                opacity: "0.6"
            }}
              twoToneColor="FFFFFF"
            />
            <img src={character.image} 
                onClick={() => {onImageClickHandler(character)}} 
                className={s.characterImage} 
                alt='character_image'
            />
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