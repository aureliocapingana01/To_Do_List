
import { Cabecalho, Conteudo, Footer } from "./Componentes";
import { Home } from "./Pages";


const App = () => {
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <Home />
      </Conteudo>
      <Footer autor='Aurélio Capingana'/>
    </>
  );
};

export { App };
