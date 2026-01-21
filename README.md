# Cardápio Digital - Frontend

Este projeto é a interface web para o sistema de Cardápio Digital, desenvolvida com React e TypeScript. A aplicação consome a API RESTful construída em Spring Boot para listar e cadastrar itens no cardápio de forma interativa.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, garantindo maior segurança no código.
- **Vite**: Ferramenta de build rápida para projetos web modernos.
- **TanStack Query (React Query)**: Biblioteca para gerenciamento de estado assíncrono e requisições à API (caching, atualizações em tempo real).
- **CSS**: Estilização dos componentes.

## 📋 Pré-requisitos

Para executar este projeto, você precisará ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior recomendada)
- **npm** (ou yarn/pnpm)
- O **Backend** do projeto rodando localmente.

## 🔧 Configuração e Execução

### 1. Configurar o Backend

Certifique-se de que a API Spring Boot esteja em execução e conectada ao banco de dados. Você pode encontrar o repositório e as instruções de execução do backend aqui:
👉 [Repositório Backend - Spring Menu](https://github.com/dduartess/spring-menu-backend)

A API deve estar acessível em `http://localhost:8080`.

### 2. Instalar Dependências

No diretório raiz do projeto frontend, abra o terminal e execute o comando para instalar as dependências listadas no `package.json`:

```bash
npm install
```

### 3. Executar a Aplicação

Para iniciar o servidor de desenvolvimento local:

```bash
npm run dev
```

A aplicação estará rodando geralmente em `http://localhost:5173` (verifique o terminal para a porta correta).

## ✨ Funcionalidades

- **Visualizar Cardápio**: A aplicação busca os dados do endpoint `/food` e exibe uma grade com os itens de comida cadastrados (imagem, título e preço).
- **Cadastrar Novo Item**: Através de um botão "novo", abre-se um modal onde é possível inserir título, preço e URL da imagem para cadastrar um novo prato via endpoint POST `/food`. A lista é atualizada automaticamente após o cadastro.

## 📂 Estrutura do Projeto

A estrutura principal do código fonte em `src`:

- **`components`**: Componentes reutilizáveis da interface.
  - `cards`: Componente responsável por exibir cada item do cardápio.
  - `crate-modal`: Modal de formulário para criação de novos itens.
- **`hooks`**: Hooks personalizados para integração com a API usando React Query.
  - `useFoodData`: Hook para buscar (GET) os dados.
  - `useFoodDataMutate`: Hook para enviar (POST) novos dados.
- **`interface`**: Definições de tipos TypeScript (ex: `FoodData`) para garantir a consistência dos dados entre o front e o back.
- **`App.tsx`**: Componente principal que organiza a tela e gerencia o estado do modal.

## 👤 Autor

Desenvolvido por [dduartess].