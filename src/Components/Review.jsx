import React from 'react'
import estrellas from '../img/estrellas.png';
import cancelar from '../img/cancelar.png';
export const Review = ({datosEnviados,eliminarTestimonio}) => {

  const handleEliminarTestimonio = (id) => {
    eliminarTestimonio(id);
  };
    console.log(datosEnviados);

  return (
    <div className="view-rview">
        {
            datosEnviados.map((datosEnviado)=>(
            <div className="item-1 text-center" key={datosEnviado.id}> 
                <div className='contenedor-icono-x'>
                <img onClick={() => handleEliminarTestimonio(datosEnviado.id)} className='icono-x' src={cancelar}></img>
                </div>
                <img className='mt-5 ml-14' src={estrellas}></img>
                <p className='mt-3'>Nombre <span>{datosEnviado.usuario}</span></p>
                <p className='mt-3 pb-5'><span>{datosEnviado.testimonio}</span></p>
            </div>
            ))
            }

               
    </div>
  )
}
