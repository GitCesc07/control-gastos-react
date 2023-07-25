
const NuevoPresupuesto = () => {
  return (
    <div className="contenedor-presuepuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
            <label htmlFor="">Definir Presuepuesto</label>
            <input type="text"
            className="nuevo-presuepuesto"
            placeholder="Añade tu presupuesto"
             />
        </div>

        <input type="submit" value="Añadir" />

      </form>
    </div>
  )
}

export default NuevoPresupuesto
