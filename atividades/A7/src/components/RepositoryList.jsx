import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

const repository = {
    name: "Atividade",
    description: "Descrição da Atividade",
    link: "https://github.com/viniciusarashiro"
}

export function RepositoryList(props) {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                < RepositoryItem repository={repository} />
                < RepositoryItem repository={repository} />
                < RepositoryItem repository={repository} />
                < RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}