
import './Conteudo.css';

function MiddleContent() {
    return (
        <div className="conteudo">
            <div className="centerConteudo">

                <div className="box-botoes">
                    <div className="botoes">
                        <ul>
                        <li> <a href="/"> Início </a> </li>
                            <li> <a href="/2"> Voluntários </a> </li>
                            <li> <a href="/3"> Organizações </a> </li>
                            <li> <a href="/4"> Entrar </a> </li>
                        </ul>
                    </div>
                </div>

                <div className="tituloPag5">
                    <h1> CADASTRO VOLUNTÁRIO </h1>
                </div>

                <div className="form">
                    <form>
                        <div className="items-form">                            
                            <input placeholder="CPF..." type="text" />  
                            <h4> CPF </h4>                          
                            <input placeholder="Nome..." type="text" />
                            <h4> NOME </h4>                            
                            <input placeholder="Email..." type="text" />
                            <h4> EMAIL </h4>                            
                            <input placeholder="Telefone..." type="text" />
                            <h4> TELEFONE </h4>                            
                            <input placeholder="Gênero..." type="text" />
                            <h4> GÊNERO </h4>                            
                            <input placeholder="Senha..." type="text" />
                            <h4> SENHA </h4>                            
                            <input placeholder="Confirmar..." type="text" />
                            <h4> CONFIRMAR </h4>
                            <strong> <p> Use oito ou mais caracteres com uma combinação de letras, números e símbolos </p> </strong>
                        </div>                        
                        <input type="submit"></input>                     
                    </form>
                </div>

                <div className="imagem5">
                    <img src="https://www.liferay.com/documents/10182/0/unify+LXC.svg/cec85a80-dd11-ded0-91e9-66abe1e09bcb/unify+LXC.svg?t=1647020822439&download=true"/>
                </div>

            </div>

        </div>
    )
}

export default MiddleContent;