import style from "./Botao.module.css";
import { tipoBotao } from "./Constante";


const Botao = (props) => {

  const { texto, tipo= tipoBotao.primario , ...outras } = props;
  return (
    <button 
      className={style.botao} 
      tipo={tipo} 
      {...outras}>
      {texto}
    </button>
  );
};
export { Botao };
