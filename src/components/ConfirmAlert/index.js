

export const ConfirmAlert = ({ onClick }) => {
  
  return (
    <div>
      <button onClick={onClick}>Confirmar</button>
      <button onClick={onClick}>Cancelar</button>
    </div>
  )
}
