import { useState } from "react";

export const FormValidacion = ({onSubmitMensajeAlertaEnviados}) => {
    //Validacion de los Campos Vacios
    const [validarNombreVacio,setvalidarNombreVacio] = useState('');
    const [validarApellidoVacio,setvalidarApellidoVacio] = useState('');
    const [validarCorreoVacio,setvalidarCorreoVacio] = useState('');
    const [DatosEnviado, setDatosEnviado]=useState(null);
    //Mostrar los datos estado
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [datosEnviados, setDatosEnviados] = useState(null);

    const HandelChange = (e) => {
        const { id, value } = e.target;
        console.log(value);
        if (id === 'nombre') {
            if (value.trim() === '') {
                setvalidarNombreVacio('Debes llenar el Nombre');
            } else {
                setvalidarNombreVacio('');
            }
        } else if (id === 'apellido') {
            if (value.trim() === '') {
                setvalidarApellidoVacio('Debes llenar el Apellido');
            } else {
                setvalidarApellidoVacio('');
            }
        } else if (id === 'correo') {
            if (value.trim() === '') {
                setvalidarCorreoVacio('Debes llenar el Correo');
            } else {
                setvalidarCorreoVacio('');
            }
        }
    }


    const HandelSubmit = (e) =>{
            e.preventDefault();
            const valueNombre = e.target.elements.nombre.value.trim();
            const valueApellido = e.target.elements.apellido.value.trim();
            const valueCorreo = e.target.elements.correo.value.trim();

            let hayErrores=false;

            if (valueNombre === '') {
                setvalidarNombreVacio('Debes llenar el Nombre');
                hayErrores=true;
            } else {
                setvalidarNombreVacio('');
            }
    
            if (valueApellido === '') {
                setvalidarApellidoVacio('Debes llenar el Apellido');
                hayErrores=true;
            } else {
                setvalidarApellidoVacio('');
            }
    
            if (valueCorreo === '') {
                setvalidarCorreoVacio('Debes llenar el Correo');
                hayErrores=true;  
            } else {
                setvalidarCorreoVacio('');
            }
            if(!hayErrores){
                onSubmitMensajeAlertaEnviados(valueNombre, valueApellido, valueCorreo);
                setNombre(valueNombre);
                setApellido(valueApellido);
                setCorreo(valueCorreo);
                setDatosEnviados({ nombre: valueNombre, apellido: valueApellido, correo: valueCorreo });



            }

            
           
        }
    
    return (
    <div className="contenedor-formulario  mt-5 ml-5 w-1200 text-center mx-auto">
    <h1 className="text-violet-600 text-4xl font-bold mt-5">Validando Formulario con React y Tailwind CSS</h1>           
    <form onSubmit={HandelSubmit} className="bg-violet-500 text-white font-bold pt-5 pb-10 mt-10 w-1/4 rounded-xl mx-auto">
        <div className="mb-5 mt-10 mb-3">
            <label className="mr-5" htmlFor="nombre">Nombre</label>
            <input onChange={HandelChange} className="text-violet-700"  id="nombre"></input>
        </div>
        <div>
            <p className="mb-3">{validarNombreVacio}</p>
        </div>
        <div className="mb-3">
            <label  className="mr-5" htmlFor="nombre">Apellido</label>
            <input onChange={HandelChange} className="text-violet-700" id="apellido"></input>
        </div>
        <div>
            <p className="mb-3">{validarApellidoVacio}</p>
        </div>
        <div className="mb-3">
            <label  className="mr-5" htmlFor="nombre">Correo</label>
            <input onChange={HandelChange} className="text-violet-700"  id="correo"></input>
        </div>
        <div>
            <p className="mb-3" >{validarCorreoVacio}</p>
        </div>
        <input disabled={validarNombreVacio || validarNombreVacio || validarCorreoVacio} className="bg-white p-3 text-violet-600 rounded-xl text-center mt-5" type="submit" value="Agregar Cliente"></input>
    </form>
    
     {datosEnviados && (
                <div className="mt-5 bg-green-500 text-white w-1/6 mx-auto rounded-xl">
                    <h2 className="text-lg font-bold">Datos enviados:</h2>
                    <p>Nombre: {datosEnviados.nombre}</p>
                    <p>Apellido: {datosEnviados.apellido}</p>
                    <p>Correo: {datosEnviados.correo}</p>
                </div>
            )}
    </div>
  )
}

