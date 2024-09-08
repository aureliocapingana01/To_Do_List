import { ItemTarefas } from "./ItemTarefas/ItemTarefas";
import style from "./ListaDeTarefas.module.css";

const ListaDeTarefa = () => {
  const tarefas = [
    { id: 1, nome: "um" },
    { id: 2, nome: "dois" },
    { id: 3, nome: "tres" },
  ];
  return (
    <ul className={style.ul}>
      {tarefas.map((item) => (
        <ItemTarefas key={item.id} nomeTarefa={item.nome} />
      ))}
    </ul>
  );
};
export { ListaDeTarefa };
