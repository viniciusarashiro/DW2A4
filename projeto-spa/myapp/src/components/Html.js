import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/Tech.css'

const Html = () => {
    return (
        <>
            <div className="techMain">
                <h1>Introdução</h1>
                <div className="btnBox">
                    <div className="btn">
                        <NavLink to="/" className="readMore">Anterior</NavLink>
                    </div>
                    <div className="btn">
                        <NavLink to="/" className="readMore">Próximo</NavLink>
                    </div>
                </div>


                <section>
                    <h2>O que é HTML?</h2>
                    <p>HTML significa Hyper Text Markup Language. É a linguagem de marcação padrão para a criação de páginas da web. É com ela que estruturamos uma página da web, através de tags..</p>
                </section>
                <hr />
                <section>
                    <h2>Tags HTML</h2>
                    <p>HTML funciona baseada em marcações específicas chamadas tags. Uma tag  serve para demarcar os elementos da página (textos, multimídia, containers). Uma tag é um conjunto de palavras entre sinais de colchete angular.</p>
                    <code>
                        <p> &lt;p&gt;Exemplo de parágrafo&lt;/&gt;</p>
                    </code>
                    <p>As tag também podem ter atributos e valores, que vão fornecer informações adicionais para configuração de uma tag e são declarados sempre na tag de abertura.</p>
                    <code>
                        <p>	&lt;a href="index.html"&gt;Exemplo de link&lt;/&gt;</p>
                    </code>
                </section>
                <hr />
                <section>
                    <h2>Estrutura básica</h2>
                    <pre> {
                        `
                        <!DOCTYPE html>
                            <html>
                                <head>
                                    <title>Titúlo da página</title>
                                </head>
                                 <body>
                                    <p>Parágrafo.</p>
                                 </body>
                            </html>
                        `
                    }
                        <ul>
                            <li>&lt;!DOCTYPE html&gt; define o tipo de documento e a versão</li>
                            <li>&lt;html&gt; elemento raiz de uma página html</li>
                            <li>&lt;head&gt; elemento que contém metadados da página</li>
                            <li>&lt;title&gt; configura o título da página que é mostrado na aba do navegador</li>
                            <li>&lt;body&gt;seção onde é colocado todo o conteúdo da página para aparecer na tela.</li>
                        </ul>
                    </pre>
                </section>
            </div>
        </>
    )
}

export default Html;