import React from 'react'
import { TextoBackery } from './TextoBackery'
import bakersDelight1 from '../img/bakers-delight-1.jpg';
import bakersDelight2 from '../img/bakers-delight-2.jpg';

export const BackersDelight = () => {
  return (
    <div className='w-3/4 mx-auto text-black mt-20 flex mb-20'>
    <TextoBackery titulo={"Discover"} subtitulo={"OUR History"} parrafo={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab eaque sunt ea magni enim quasi quisquam placeat nobis velit hic tempore obcaecati reiciendis"} verMas={"LEARN MORE"} />
  
     <div className='contenedor-imagen-Story flex-1'>
        <div className="imagen-story flex">
        <img className='flex-1 mr-5' src={bakersDelight1}></img>
       <img  className='flex-1' src={bakersDelight2}></img>
        </div>
      
     </div>
   </div>
  )
}
