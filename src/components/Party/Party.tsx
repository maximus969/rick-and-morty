import React from "react";
import s from './Party.module.css'

type RickOrMortyImageType = {
  RickImage: string | undefined
  MortyImage: string | undefined
}

export const Party: React.FC<RickOrMortyImageType> = ({ RickImage, MortyImage }) => {
  return (
    <div className={s.partyContainer}>
      <h2 className={s.title}>PARTY</h2>

      <div className={s.partyBlock}>
        <div className={s.avatarContainer}>
          {RickImage ? null : <div className={s.avatarBlock}> Rick </div> }
          <img className={s.avatarImg} src={RickImage} alt='Rick_image'/>
        </div>

        <div className={s.avatarContainer}>
          {MortyImage ? null : <div className={s.avatarBlock}> Morty </div> }
          <img className={s.avatarImg} src={MortyImage} alt='Morty_image'/>
        </div>
      </div>
      
    </div>
  )
}