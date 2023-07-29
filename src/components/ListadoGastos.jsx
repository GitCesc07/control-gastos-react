import Gasto from "./Gasto";

const ListadoGAstos = ({gastos}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? "Gastos" : "No hay Gastos"}</h2>

      {gastos.map( gasto => (
        <Gasto
            key={gasto.id}
            gasto={gasto}
        />
      ))}
    </div>
  );
}

export default ListadoGAstos
