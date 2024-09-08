import { Botao, tipoBotao } from "../../Botao";
import style from "./ItemTarefas.module.css";

const ItemTarefas = (props) => {
  const { nomeTarefa } = props;
  return (
    <li className={style.li}>
      {nomeTarefa}
      <Botao texto="Remover" tipo={tipoBotao.secundario} />
    </li>
  );
};
export { ItemTarefas };
