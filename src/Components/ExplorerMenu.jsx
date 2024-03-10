import React from 'react'
import { TextoBackery } from './TextoBackery'
import Square1 from '../img/square-1.jpg';
import Square2 from '../img/square-2.jpg';
import Square3 from '../img/square-3.jpg';
import Square4 from '../img/square-4.jpg';
export const ExplorerMenu = () => {
  return (
    <div className='w-3/4 mx-auto text-black mt-20 flex mb-20'>
     <div className='contenedor-imagen-menu flex-1'>
        <div className='imagenes-menu'>
        <img src={Square1}></img>
        <img src={Square2}></img>
        <img src={Square3}></img>
        <img src={Square4}></img>
        </div>
       
      </div>
     <TextoBackery titulo={"Explore"} subtitulo={"Menu"} parrafo={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab eaque sunt ea magni enim quasi quisquam placeat nobis velit hic tempore obcaecati reiciendis"} verMas={"Set Full Menu"} />
      
    </div>
  )
}

