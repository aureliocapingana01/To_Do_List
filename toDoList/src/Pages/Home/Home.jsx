import { FormCriarTarefas, ListaDeTarefas } from "../../Components";
import Style from "./Home.module.css";

const Home = () => {
  return (
    <div className={Style.home}>
      <FormCriarTarefas />
      <ListaDeTarefas />
    </div>
  );
};
export { Home };
