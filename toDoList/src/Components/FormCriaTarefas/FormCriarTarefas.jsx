import Style from "./Form.module.css";
import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";

const FormCriarTarefas = () => {
  return (
    <form className={Style.form}>
      <CampoTexto />
      <Botao textoBotao="Criar Tarefas" />
    </form>
  );
};
export { FormCriarTarefas };
