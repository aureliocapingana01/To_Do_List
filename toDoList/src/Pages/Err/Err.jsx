import Style from "./Err.module.css";

const Err = () => {
  return (
    <div className={Style.err}>
      <h1>404</h1>
      <p>Pagina não encontrado...</p>
    </div>
  );
};
export { Err };
