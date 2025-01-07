import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Footer } from "../../Components";
import { Home } from "../../Pages";

const LayoutPadrao = () => {
  return (
    <>
      <Cabecalho nomeUser="Aurelio" />
      <Conteudo>
        <Outlet />
      </Conteudo>
      <Footer autor="Aurélio Capingana" />
    </>
  );
};
export { LayoutPadrao };
