import { FormValidacion } from "./Components/FormValidacion";
import { UserNameForm } from "./Components/UserNameForm"
export const App = () => {

  const onSubmitUserName = (username) => alert(`Ingresaste ${username}`);
  const onSubmitMensajeAlertaEnviados = (nombre,apellido, correo) => alert(`Ingresaste los siguientes datos Nombre ${nombre} Apellido ${apellido} Correo ${correo}`);
  
  
  
  return (
  <section>
    {/* <UserNameForm onSubmitUserName={onSubmitUserName}/> */}
    <FormValidacion onSubmitMensajeAlertaEnviados={onSubmitMensajeAlertaEnviados}  />
  </section>
  )
}

