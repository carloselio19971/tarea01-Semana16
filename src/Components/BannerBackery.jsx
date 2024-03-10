import React from 'react'

export const BannerBackery = ({imagen,titulo,subtitulo}) => {
  return (
    <div className={`banner-backery ${imagen}`}>
    <div className='texto-banner-backery w-3/4 mx-auto text-center'>
         <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
    </div>
      
    </div>
  )
}

