    import React, { useState } from 'react'
    export const FormReview = ({recibirDatos}) => {

        const [usuario, setUsuario]=useState('');
        const [testimonio,setTestimonio]=useState('');

        const HandelSubmit =(e) =>{
            e.preventDefault();
            if(usuario==='' || testimonio===''){
                console.log("Error");
                return;
            }
            const objUsuario={
                usuario:usuario,
                testimonio:testimonio,
                id:new Date().getMilliseconds()
            }
            recibirDatos(objUsuario);
            setUsuario('');
            setTestimonio('');
        }
        
        const eliminarTestimonio = (id) => {
            setDatosEnviados(datosEnviados.filter(testimonio => testimonio.id !== id));
          };
        

    return (
        <div className="form-review">
                    <form onSubmit={HandelSubmit}>
                        <input onChange={(e)=>setUsuario(e.target.value)}     value={usuario} id="usuario" className="mb-3" placeholder="Your name"></input>
                        <input onChange={(e)=>setTestimonio(e.target.value)}  value={testimonio} id="testimonio" placeholder="Review"></input>
                        <button className="mt-3">SEND</button>
                    </form >
        </div>
    )
    }


