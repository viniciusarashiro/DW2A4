import React from 'react';
import { NavLink } from 'react-router-dom'

const Css = () => {
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
                    <h2>O que é Css?</h2>
                    <p>CSS significa Cascading Style Sheets. É uma linguagem utilizada para definir estilos. Tem como função descrever como os elementos HTML deverão ser exibidos na tela.</p>
                </section>
                <hr />
                <section>
                    <h2>O que é Css?</h2>
                    <p>A configuraçào do CSS é realizado através dos seletores. O seletor define o local da marcação onde a regra de estilo será aplicada. e é seguido por uma declaração que é composta por uma propriedade que define a característica a ser estilziada, e um valor que define o valor da propriedade a ser estilizada.</p>
                    <pre> {
                        `
                            p {
                                font-family: Arial;
                                font-size: 20px;
                                color: red;
                            }
                        `
                    }
                    </pre>
                </section>
                <hr />
                <section>
                    <h2>Sintaxe</h2>
                    <p>CSS é case sensitive, ou seja, não faz distinção entre letras maiúsculas e minúsculas.</p>
                    <p>Para utilizar comentários é necessário utilizar "/*" no início, e "*/" para finalizar o comentário.</p>
                </section>
                <hr />
                <section>
                    <h2>Por que usar CSS?</h2>
                    <p>CSS é usado para definir estilos para suas páginas da web, incluindo o design, layout e variações de exibição para diferentes dispositivos e tamanhos de tela.</p>
                    <p>CSS economiza repetição de código. Com um arquivo de folha de estilo externo, você pode alterar a aparência de um site inteiro alterando apenas um arquivo</p>
                </section>
            </div>
        </>
    )
}

export default Css;