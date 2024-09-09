import { Link } from "react-router-dom";
import style from "./cabecalho.module.css";

const Cabecalho = (props) => {
  const { nome } = props;
  return (
    <div className={style.cabecalho}>
      <Link to="/">
        <h1>
          <span>To Do </span>List
        </h1>
      </Link>
      <Link to="/saibamais">Saiba Mais</Link>
    </div>
  );
};
export { Cabecalho };
