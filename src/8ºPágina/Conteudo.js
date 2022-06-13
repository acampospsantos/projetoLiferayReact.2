
import './Conteudo.css';

function MiddleContent() {
    return (
        <div className="conteudo">
            <div className="centerConteudo">

                <div className="box-botoes">
                    <div className="botoes">
                        <ul>
                            <li> <a href="/8"> Ações Inscritas </a> </li>
                            <li> <a href="/9"> Vagas Disponíveis </a> </li>
                            <li> <a href="/"> Sair </a> </li>                            
                        </ul>
                    </div>
                </div>

                <div className="portalOrganizacao">
                    <h1> PORTAL ORGANIZAÇÃO </h1>
                </div>

                <div className="acoesPromovidas">
                    <h2> AÇÕES PROMOVIDAS </h2>
                </div>

                <div className="boxAcoes">
                    <p> -- Box das Ações que a Organização tá promovendo -- </p>
                </div>

            </div>

        </div>
    )
}

export default MiddleContent;