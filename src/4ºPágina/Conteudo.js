
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

                <div className="tituloPag4">
                    <h1> FAÇA SEU LOGIN </h1>
                    <h4> Insira o CPF ou CNPJ associado a sua conta de acesso. </h4>
                </div>

                <div className="form">
                    <form>
                        <div className="items-form">
                            <input placeholder="CPF/CNPJ..." type="text" />
                            <h4> CPF/CNPJ </h4>
                            <input placeholder="Senha..." type="text" />
                            <h4> SENHA </h4>
                            <a href="/7" > <p> Esqueceu a senha? </p></a>
                        </div>
                        <input type="submit" />
                    </form>
                </div>

                <div className="semContaVol">
                    <a href="/5"> <h3> Ainda não possui uma conta? Vem ser um Voluntário </h3> </a>
                </div>

                <div className="semContaOrg">
                    <a href="/6"> <h3> Ainda não possui uma conta? Vem ser uma Organização </h3> </a>
                </div>

                <div className="imagem4">
                    <img src="https://www.liferay.com/documents/10182/0/unify+LXC.svg/cec85a80-dd11-ded0-91e9-66abe1e09bcb/unify+LXC.svg?t=1647020822439&download=true" />
                </div>

            </div >

        </div >
    )
}

export default MiddleContent;