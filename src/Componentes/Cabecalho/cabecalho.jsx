import style from "./cabecalho.module.css";

const Cabecalho = (props) => {
  const { nome } = props;
  return (
    <div className={style.cabecalho}>
      <h1>
        <span>To Do </span>List
      </h1>
    </div>
  );
};
export { Cabecalho };
