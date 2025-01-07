import { Link } from "react-router-dom";
import Style from "./Cabecalho.module.css";

const Cabecalho = () => {
  return (
    <div className={Style.cabecalho}>
      <Link to="/">
        <h1>
          To Do
          <span> List</span>
        </h1>
      </Link>

      <Link to="/SobreNos">Sobre Nos</Link>
    </div>
  );
};

export { Cabecalho };
