
export const TextoBackery = ({titulo,subtitulo,parrafo,verMas}) => {
  
  return (
    <div className='texto-componente flex-1 mt-5 text-xl text-center'>
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
        <p>{parrafo}</p>
        <a>{verMas}</a>
      </div>
  )
}
