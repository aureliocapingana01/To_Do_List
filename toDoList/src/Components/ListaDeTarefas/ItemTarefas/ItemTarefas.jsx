import Style from "./Item.module.css";
import { Botao, TIPO_BTN } from "../../Botao";

const ItemTarefas = (props) => {
  const { nome } = props;
  return (
    <li className={Style.li}>
      {nome}
      <Botao textoBotao="Deletar" tipo={TIPO_BTN.PRIMARY} />
    </li>
  );
};
export { ItemTarefas };
