import Style from "./Estilo.module.css";
import { ItemTarefas } from "./ItemTarefas/ItemTarefas";

const ListaDeTarefas = () => {
  const tarefas = [
    { id: 1, nome: "Item 6" },
    { id: 2, nome: "Item 5" },
    { id: 3, nome: "Item 4" },
  ];
  return (
    <ul className={Style.ul}>
      {tarefas.map((item) => (
        <ItemTarefas key={item.id} nome={item.nome} />
      ))}
    </ul>
  );
};
export { ListaDeTarefas };
