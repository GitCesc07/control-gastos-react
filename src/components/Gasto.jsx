import { formatearFecha } from "./helpers/index";

import IconoAhorro from "../img/icono_ahorro.svg"
import IconoComida from "../img/icono_comida.svg"
import IconoTransporte from "../img/icono_transporte.svg"
import IconoCasa from "../img/icono_casa.svg"
import IconoGastosVarios from "../img/icono_gastos.svg"
import IconoOcio from "../img/icono_ocio.svg"
import IconoSalud from "../img/icono_salud.svg"
import IconoSuscripciones from "../img/icono_suscripciones.svg"


const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  transporte: IconoTransporte,
  casa: IconoCasa,
  variados: IconoGastosVarios,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
};

const Gasto = ({ gasto }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto;

  return (
    <div className="gasto sombra">

      <div className="contenido-gasto">

        <img src={diccionarioIconos[categoria]} alt="icono categoria" />

        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">
            Agregado el: {""}
            <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
      </div>

      <p className="cantidad-gasto">${cantidad}</p>
    </div>
  );
};

export default Gasto;