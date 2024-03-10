import {Review} from './Review';
import { FormReview } from './FormReview';
import { useState } from 'react';

export const CostumberReview = () => {
    const [datosEnviados, setDatoEnviado]=useState([]);
    const recibirDatos = (objUsuario)=>{
            setDatoEnviado([...datosEnviados,objUsuario]);
            console.log(datosEnviados);
    }
    const eliminarTestimonio = (id) => {
        setDatoEnviado(datosEnviados.filter(testimonio => testimonio.id !== id));
      };
    
    return (
    <div className="costumer-reiw">
        <h2 className="text-center pt-20 pb-10">Costumer Review</h2>
        <div className="informacion-review w-3/4 mx-auto">
            <FormReview recibirDatos={recibirDatos}/>
            <Review datosEnviados={datosEnviados} eliminarTestimonio={eliminarTestimonio}/> 
              
        </div>
    </div>
  )
}


