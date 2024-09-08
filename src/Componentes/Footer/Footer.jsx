import style from "./footer.module.css";

const Footer = (props) => {

  const { autor } = props;
  const anoArtual = new Date().getFullYear();
  
  return (
    <div className={style.footer}>
      <p>
        Curso de: <span>React</span>
      </p>
      <p>
        @copyright: <span>{anoArtual} </span>
      </p>
      <p>
        Criado por: <span>{autor} </span>
      </p>
    </div>
  );
};

export { Footer };
