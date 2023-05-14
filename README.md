<p align="center">
  <a href="https://nickgabe.vercel.app">
    <img alt="Central nick gabe" src="./public/extras/title-banner.png">
  </a>
</p>

<p align="center">
  <img alt="Vercel badge" src="https://vercelbadge.vercel.app/api/nick-gabe/central-nickgabe?style=flat">
  <img alt="Repository stars" src="https://img.shields.io/github/stars/nick-gabe/central-nickgabe">
  <img alt="Top language" src="https://img.shields.io/github/languages/top/nick-gabe/central-nickgabe">
  <img alt="Contributors" src="https://img.shields.io/github/all-contributors/nick-gabe/central-nickgabe">
</p>

<p align="center">
"Quando eu postava meu conteúdo no twitter ele sempre se perdia no tempo e nem eu encontrava mais depois de alguns meses, então pensei: por que não criar um site para guardar eles? E então saiu o <a href="https://nickgabe.vercel.app">nickgabe.vercel.app</a>"
</p>

# Sumário
- [Sumário](#sumário)
  - [🤔 Sobre o projeto](#-sobre-o-projeto)
  - [🔧 O que o projeto utiliza:](#-o-que-o-projeto-utiliza)
  - [⚡ Como rodar:](#-como-rodar)
    - [Prepare o ambiente:](#prepare-o-ambiente)
    - [Front e Back:](#front-e-back)
    - [Testes:](#testes)
    - [Posts:](#posts)
  - [🤝 Contribuidores](#-contribuidores)

---

## 🤔 Sobre o projeto
Eu (Nick Gabe) frequentemente posto conteúdo educativo em redes sociais como Twitter e Linkedin, entretanto conforme mais posts vão sendo feitos, os antigos vão ficando mais difíceis de serem encontrados. Este site é um local para centralizar esse conhecimento e deixar de forma indexável, onde você pode procurar pelo tópico que quiser!

## 🔧 O que o projeto utiliza:
<details>
  <summary>Package Manager</summary>
  
  - Yarn
</details>

<details>
  <summary>Tecnologias</summary>

  - Next 13
  - Typescript
</details>

<details>
  <summary>Testes</summary>

  - Cypress
</details>

<details>
  <summary>Estilização</summary>

  - Tailwind
  - Antd
</details>

<details>
  <summary>Scrapping</summary>

  - Puppeteer
  - Javascript
</details>
<br>

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

## 🤝 Contribuidores

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->