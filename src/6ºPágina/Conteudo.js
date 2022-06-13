
import './Conteudo.css';

function MiddleContent() {
    return (
        <div className="conteudo">
            <div className="centerConteudo">

                <div className="box-botoes6">
                    <div className="botoes6">
                        <ul>
                        <li> <a href="/"> Início </a> </li>
                            <li> <a href="/2"> Voluntários </a> </li>
                            <li> <a href="/3"> Organizações </a> </li>
                            <li> <a href="/4"> Entrar </a> </li>
                        </ul>
                    </div>
                </div>

                <div className="tituloPag6">
                    <h1> CADASTRO ORGANIZAÇÃO </h1>
                </div>

                <div className="form">
                    <form>
                        <div className="items-form">                            
                            <input placeholder="CNPJ..." type="text" />  
                            <h4> CNPJ </h4>                          
                            <input placeholder="Nome da Organização..." type="text" />
                            <h4> NOME DA ORGANIZAÇÃO </h4>                            
                            <input placeholder="Ramo..." type="text" />
                            <h4> RAMO </h4>    
                            <input placeholder="Senha..." type="text" />
                            <h4> SENHA </h4>                            
                            <input placeholder="Confirmar..." type="text" />
                            <h4> CONFIRMAR </h4>
                            <p> Use oito ou mais caracteres com uma combinação de letras, números e símbolos </p>
                        </div>                        
                        <input type="submit" />                        
                    </form>
                </div>

                <div className="imagem6">
                    <img src="https://www.liferay.com/documents/10182/0/unify+LXC.svg/cec85a80-dd11-ded0-91e9-66abe1e09bcb/unify+LXC.svg?t=1647020822439&download=true"/>
                </div>

            </div>

        </div>
    )
}

export default MiddleContent;