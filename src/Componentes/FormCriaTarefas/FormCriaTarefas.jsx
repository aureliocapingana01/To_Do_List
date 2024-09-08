import { Botao, tipoBotao } from "../Botao";
import { CampoTexto } from "../CampoTexto";
import style from './formCriaTarefa.module.css'

const FormCriaTarefas = () => {
  return (
    <form className={style.criaTarefa}>
      <h1>Cria Tarefas</h1>
      <div>
        <CampoTexto />
        <Botao
          texto='Adicionar'
          // tipo={tipoBotao.peimario}
        />
      </div>
    </form>
  );
};
export { FormCriaTarefas };
