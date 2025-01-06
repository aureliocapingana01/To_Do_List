import { Cabecalho, Conteudo, Footer } from "./Components";

const App = () => {
  return (
    <>
      <Cabecalho nomeUser="Aurelio" />
      <Conteudo>
        <h1>Titulo</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, reprehenderit delectus! Fuga tempora dolor temporibus iure quaerat iste, hic labore quo cum repudiandae doloribus eos explicabo. Iure corporis laborum similique.</p>
      </Conteudo>
      <Footer autor='Aurélio Capingana'/>
    </>
  );
};

export default App;
