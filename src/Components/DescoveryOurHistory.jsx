import React from 'react'
import imagenStory from '../img/story-img.jpg';
import { TextoBackery } from './TextoBackery';




export const DescoveryOurHistory = () => {
  return (
    <div className='w-3/4 mx-auto text-black mt-20 flex mb-20'>
     <TextoBackery titulo={"Discover"} subtitulo={"OUR History"} parrafo={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab eaque sunt ea magni enim quasi quisquam placeat nobis velit hic tempore obcaecati reiciendis"} verMas={"LEARN MORE"} />
    
      <div className='contenedor-imagen-Story flex-1'>
        <img className='ml-40' src={imagenStory}></img>
      </div>
    </div>
  )
}
