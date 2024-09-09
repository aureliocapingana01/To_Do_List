import { Outlet } from "react-router-dom"
import { Cabecalho, Conteudo, Footer } from "../Componentes"


const Layout = () => {
  return (
    <>
    <Cabecalho />
      <Conteudo>
        <Outlet />
      </Conteudo>
      <Footer autor='Aurélio Capingana'/>
    </>
  )
}
export{Layout}