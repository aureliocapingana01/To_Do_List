import { FormCriaTarefas } from "../../Componentes";
import { ListaDeTarefa } from "../../Componentes/ListaDeTarefas/ListaDeTarefa";
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.home}>
      <FormCriaTarefas />
      <ListaDeTarefa />
    </div>
  );
};
export { Home };
