import Style from "./Footer.module.css";

const Footer = (props) => {
  
  const { autor } = props;
  const dataAtual = new Date().getFullYear();

  return (
    <div className={Style.footer}>
      <p>
        <h3>Criado Por: </h3>
        <span> {autor} </span>
      </p>
      <p>
        <h3>Copyright: </h3>
        <span> {dataAtual} </span>
      </p>
      <p>
        <h3>
          <a target="_blank" href="https://github.com/aureliocapingana01">
            Github
          </a>
        </h3>
      </p>
    </div>
  );
};
export { Footer };
