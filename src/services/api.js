export function loadLists() {
    return [
        {
            title: 'Projetos',
            creatable: true,
            cards: [
                {
                    id: 1,
                    content: 'Desenvolvimento de Software de Gestão de projetos utilizando como exemplo o modelo Kanban',
                    labels: ['#7159c1'],
                },
                {
                    id: 2,
                    content: 'Desenvolvimento da interface do Software de Gestão utilizando o React JS',
                    labels: ['#7159c1'],
                },
                {
                    id: 3,
                    content: 'Desenvolvimento de ambiemte Drag And Drop utilizando a biblioteca react-dnd',
                    labels: ['#7159c1'],
                },
                {
                    id: 4,
                    content: 'Desenvolvimento de BackEnd desenvolvido com NodeJs, Banco de dados Sqlite, Express e Sequilize',
                    labels: ['#54e1f7'],
                },
                {
                    id: 5,
                    content: 'Deploy da aplicação para testes da Empresa EUAX',
                    labels: ['#54e1f7'],
                },
            ]
        },
        {
            title: 'Fazendo',
            creatable: false,
            cards: [
                {
                    id: 6,
                    content: 'Layout do Painel Estilo Kanban, desenvolvido com ReactJs, usando a metodologia com Hooks, para o projeto ficar mais fluido e o código mais clean',
                    labels: [],
                }
            ]
        },
        {
            title: 'Pausado',
            creatable: false,
            cards: [
                {
                    id: 7,
                    content: 'Desenvolvimento do Styled-Components Global para ser utilizado em todo o projeto sem depender de Frameworks Front-End',
                    labels: ['#7159c1'],
                },
                {
                    id: 8,
                    content: 'Bibliotecas ReactJS para Drag and Drop',
                    labels: ['#54e1f7'],
                },
                {
                    id: 9,
                    content: 'Tela Board para servir de modelo para as listas Kanban',
                    labels: [],
                }
            ]
        },
        {
            title: 'Concluído',
            creatable: false,
            done: true,
            cards: [
                {
                    id: 10,
                    content: 'Escolha do Banco de dados para testes, para esse teste será usado SQLITE para facilitar a bateria de execução do projeto',
                    labels: [],
                },
                {
                    id: 12,
                    content: 'Escolha da metodologia a utilizar, para este projeto foi utilizado ReactJS por questão da perfeita componentização',
                    labels: ['#54e1f7'],
                },
                {
                    id: 13,
                    content: 'Criar repositório no GitHub para o projeto Gestor de projetos seguindo a abordagem Kanban',
                    labels: ['#7159c1'],
                }
            ]
        },
    ];
}