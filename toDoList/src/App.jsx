import { Cabecalho, Conteudo, Footer } from "./Components";
import { Home } from "./Pages";

const App = () => {
  return (
    <>
      <Cabecalho nomeUser="Aurelio" />
      <Conteudo>
        <Home />
      </Conteudo>
      <Footer autor="Aurélio Capingana" />
    </>
  );
};

export default App;
