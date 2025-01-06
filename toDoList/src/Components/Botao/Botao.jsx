import Style from "./Botao.module.css";
import { TIPO_BTN } from "./Constantes";

const Botao = (props) => {
  const { textoBotao, tipo = TIPO_BTN.PRIMARY, ...outrasProps } = props;

  return (
    <button className={Style.botao} tipo={tipo} {...outrasProps}>
      {textoBotao}
    </button>
  );
};
export { Botao };
