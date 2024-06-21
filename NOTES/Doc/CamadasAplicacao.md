
# Responsabilidade de cada camada

## 1. Camada de Apresentação

#### Pacotes e Arquivos:

- **components**
  - /NewNoteCard/
    - Classes/Componentes: Arquivos .TSX que definem componentes de novo cartão.
  - /NoteCard/
    - Classes/Componentes: Arquivos .TSX que definem componentes de cartão.

#### Responsabilidade:

- Renderizar a interface do usuário.

#### Dependências:

- Depende da Camada de Aplicação para a lógica de negócios e manipulação de dados. Interage com a Camada de Infraestrutura pela Camada de Aplicação para obter dados ou executar operações.

--- 
## 2. Camada de Aplicação

#### Pacotes e Arquivos:

- App.tsx Classes/Componentes: Componente raiz da aplicação. 
- main.tsx Classes/Componentes: Ponto de entrada que inicializa e renderiza o componente raiz da aplicação.

#### Responsabilidade:

- Organizar a lógica de negócio da aplicação, implementar casos de uso e regras de negócios e servir como intermediário entre as camadas de Apresentação e Domínio.

#### Dependências:

- Depende da Camada de Domínio para lógica de negócios e manipulação de dados.

--- 
## 3. Camada de Infraestrutura

#### Pacotes e Arquivos:

- vite.config.ts Classes/Componentes: Arquivo de configuração para o Vite, que lida com a construção e desenvolvimento da aplicação ReactJs.

#### Responsabilidade:

- Fornecer serviços técnicos como persistência de dados, comunicação com outros sistemas e configuração do ambiente.

#### Dependências:

- Pode depender da Camada de Domínio para acessar entidades e aplicar regras de negócios.
