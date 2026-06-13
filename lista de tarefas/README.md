# Lista de Tarefas

Projeto simples de uma lista de tarefas desenvolvido para fins de estudo, utilizando **HTML**, **CSS** e **JavaScript puro**.

O objetivo principal esta em praticar a manipulacao do DOM, monitorando eventos de clique e de teclado, a criacao dinamica de elementos e movimentacao de itens entre listas.

## Funcionalidades

- Adicionar uma nova tarefa digitando no campo de texto.
- Adicionar tarefa ao clicar no botao **Adicionar Tarefa**.
- Adicionar tarefa pressionando a tecla **Enter**.
- Exibir tarefas pendentes em uma lista.
- Selecionar tarefas pendentes por meio de checkbox.
- Marcar tarefas selecionadas como finalizadas.
- Exibir tarefas concluidas em uma lista separada.
- Selecionar tarefas finalizadas por meio de checkbox.
- Remover tarefas finalizadas selecionadas.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Estrutura do projeto

```text
lista de tarefas/
|-- lista.html
|-- lista.css
|-- lista.js
`-- README.md
```

## Descricao dos arquivos

### `lista.html`

Arquivo responsavel pela estrutura da pagina. Ele contem:

- Campo para digitar uma nova tarefa.
- Botao para adicionar tarefas.
- Area de tarefas pendentes.
- Area de tarefas finalizadas.
- Botoes para selecionar, finalizar e remover tarefas.

### `lista.css`

Arquivo responsavel pela aparencia visual da aplicacao. Nele sao definidos:

- Alinhamento central dos elementos.
- Estilo do campo de entrada.
- Layout das listas de tarefas.
- Bordas, cores, espacamentos e efeitos de hover dos botoes.

### `lista.js`

Arquivo responsavel pela logica da aplicacao. Ele controla:

- Captura do texto digitado pelo usuario.
- Uso da tecla Enter para adicionar tarefas.
- Criacao de novos itens na lista.
- Adicao de checkboxes para selecionar tarefas.
- Movimentacao de tarefas pendentes para finalizadas.
- Remocao de tarefas finalizadas.

## Como executar o projeto

1. Baixe ou clone este repositorio.
2. Abra o arquivo `lista.html` em um navegador.
3. Digite uma tarefa no campo de texto.
4. Clique em **Adicionar Tarefa** ou pressione **Enter**.

Como o projeto utiliza apenas HTML, CSS e JavaScript puro, nao e necessario instalar dependencias.

## Aprendizados praticados

Durante o desenvolvimento deste projeto, foram praticados conceitos como:

- Estruturacao de paginas com HTML.
- Estilizacao com CSS.
- Selecao de elementos com `document.getElementById` e `document.querySelectorAll`.
- Escuta de eventos com `addEventListener`.
- Criacao de elementos com `document.createElement`.
- Insercao de elementos na pagina com `appendChild`.
- Remocao de elementos com `remove`.
- Uso de condicionais para controlar o comportamento da aplicacao.

## Status do projeto

Projeto realizado para fins de estudo e pratica dos fundamentos de desenvolvimento web.
