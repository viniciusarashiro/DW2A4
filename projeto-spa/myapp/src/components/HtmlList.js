import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/Tech.css'

const HtmlList = () => {
    return (
        <>
            <div className="techMain">
                <h1>Introdução</h1>
                <div className="btnBox">
                    <div className="btn">
                        <NavLink to="html" className="readMore">Anterior</NavLink>
                    </div>
                    <div className="btn">
                        <NavLink to="/" className="readMore">Próximo</NavLink>
                    </div>
                </div>

                <section>
                    <h2>Listas</h2>
                    <p>
                        As listas HTML permitem que os desenvolvedores da web agrupem um conjunto de itens relacionados em listas.
                    </p>
                </section>
                <hr />

                <section>
                    <h2>Lista Ordenada</h2>
                    <p>É uma lista onde a ordem dos itens é muito importante. Por padrão, os itens da lista serão marcados com números. Para criar uma lista não ordenada utilizamos a tag &lt;ol&gt; para delimitar a lista e a tag &lt;li&gt; para criar cada um dos seus itens internos.</p>
                    <pre>
                        {
                            `
                            <ol>
                                <li>Primeiro item</li>
                                <li>Segundo item</li>
                                <li>Terceiro item</li>
                            </ol>
                            `
                        }
                    </pre>
                </section>
                <hr />

                <section>
                    <h2>Lista não ordenada</h2>
                    <p>É uma lista onde a ordem dos itens não influenciará. Por padrão, os itens da lista serão marcados com marcadores. Para criar uma lista não ordenada utilizamos a tag &lt;ul&gt; para delimitar a lista e a tag &lt;li&gt; para criar cada um dos seus itens internos.</p>
                    <pre>
                        {
                            `
                            <ul>
                                <li>Item</li>
                                <li>Item</li>
                                <li>Item</li>
                            </ul>
                            `
                        }
                    </pre>
                </section>
                <hr />

                <section>
                    <h2>Lista de Definições</h2>
                    <p>Uma lista de definição é uma lista de termos, com uma descrição de cada termo.
                        Toda lista de definição está dentro de uma tag &lt;dl&gt;. Cada termo é um &lt;dt&gt; e cada descrição é um &lt;dd&gt; Exemplo:
                    </p>
                    <pre>
                        {
                            `
                                <dl>
                                    <dt>HTML</dt>
                                    <dd>- Hypertext Markup Language</dd>
                                    <dt>CSS</dt>
                                    <dd>- Cascading Style Sheets</dd>
                                </dl>
                            `
                        }
                    </pre>

                </section>
                <hr />
            </div>
        </>
    )
}

export default HtmlList;