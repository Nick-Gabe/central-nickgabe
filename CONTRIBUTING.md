# ✅ Orientações de contribuições

## 🤔 Como abrir uma issue?

Para abrir uma issue neste repositório do GitHub é relativamente simples, basta seguir algumas etapas:

1. Certifique-se de que você esteja logado com sua conta no GitHub.
2. Acesse a [página de issues](https://github.com/Nick-Gabe/central-nickgabe/issues) disponível no menu do repositório.
3. Clique no botão verde "New issue", este botão abrirá uma nova página para que você possa escolher o tipo de sua issue.
4. Escolha o tipo de sua issue clicando em seu respectivo botão "Get started", 
atualmente está dividido em "Reportar um erro" e "Sugerir uma nova funcionalidade".
5. Preencha o formulário com todas as informações necessárias e clique em "Submit new issue".

## 🤝 Como abrir uma pull request?

Para abrir uma pull request, primeiro certifique-se de dar fork no repositório, em seguida, siga as próximas etapas:

1. Clone o repositório do fork para sua máquina local.
2. Em sua máquina local, crie uma nova branch com o nome da feature que você está desenvolvendo.
3. Faça as alterações necessárias no código e faça o commit.
4. Após isso, faça o push para o repositório do fork.
5. Logo após o push, acesse o repositório do fork no GitHub e clique no botão "Compare & pull request".

## ⚡ Como rodar:
### Prepare o ambiente:
> Instale o yarn caso não possua:
> ```shell
> npm install -g yarn
> ```
> Instale as dependências do projeto
> ```shell
> yarn install
> ```

### Front e Back:
> - Inicie o projeto
> ```shell
> yarn dev
> ```

### Testes:
> - Inicie o cypress
> ```shell
> yarn cypress:open
> ```

### Posts:
> - Adicionar um novo post:
> ```shell
> yarn add-post <social-media> <post-url>
> ```
> - Atualizar posts existentes:
> ```shell
> yarn update-posts
> ```
