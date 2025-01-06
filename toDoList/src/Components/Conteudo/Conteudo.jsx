import Style from './Conteudo.module.css'
const Conteudo = (props) => {
  const {children} = props
  return (
    <div className={Style.conteudo}>{children} </div>
  )
}
export {Conteudo}