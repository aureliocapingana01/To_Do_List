import Style from './Cabecalho.module.css'

const Cabecalho = () => {
  return (
    <div className={Style.cabecalho}>
      <h1>
        To Do 
        <span> List</span>
      </h1>
    </div>
  );
};

export { Cabecalho };
