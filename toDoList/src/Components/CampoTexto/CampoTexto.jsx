import Style from "./CampoTexto.module.css";

const CampoTexto = (props) => {
  return (
    <>
      <input type="text" className={Style.campoTexto} {...props} />
    </>
  );
};
export { CampoTexto };
