import { useState } from "react";
import { FormValidacion } from "./Components/FormValidacion";
import { UserNameForm } from "./Components/UserNameForm"
export const App = () => {

  const onSubmitUserName = (username) => alert(`Ingresaste ${username}`);
  const onSubmitMensajeAlertaEnviados = (nombre,apellido, correo) => alert(`Ingresaste los siguientes datos Nombre ${nombre} Apellido ${apellido} Correo ${correo}`);
  
  const allItems =[
    {
      id:'apple',
      value:'apple'
    },
    {
      id:'orange',
      value:'orange'
    },
    {
      id:'grape',
      value:'grape'
    },
    {
      id:'pear',
      value:'pear'
    },
  ];
  

  const [items, setItems]=useState(allItems);
  const [deleteItems, setDeleteItems]=useState([]);

  const removeItem = (itemId) =>{
    setDeleteItems([...deleteItems, items.find(item=>item.id===itemId)]);
    setItems(items.filter((item => item.id!==itemId)));
  }

  const restoreItem = () =>{

    setItems([...items,...deleteItems]);
    setDeleteItems([]);
  }
  
  return (
  <>
 
     <FormValidacion onSubmitMensajeAlertaEnviados={onSubmitMensajeAlertaEnviados}  /> 
  <section className="w-1/4 mx-auto mt-5 bg-purple-600 text-white rounded-xl">
    <h1 className="text-center pt-5 text-2xl">REDERING ARRAYS</h1>
    <div className="mb-10">
      <button disabled={deleteItems.length===0} onClick={restoreItem} className="bg-white text-black mt-5 ml-5 w-1/4 rounded-lg">add item</button>
    </div>
    <ul className="ml-5" >
      {items.map((item)=>(
          <li key={item.id} className="pb-5">
            <button onClick={()=>removeItem(item.id)} className="bg-white text-black  mr-2 w-1/5 rounded-lg">remove</button>
            <label className="mr-2" htmlFor="">{item.value}</label>
            <input className="text-black pl-5" type="text" defaultValue={item.value}/>
          </li>
      ))}
    </ul>

  </section>
  </>
  )
}

