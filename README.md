# Panelinha (pelada-gestao-front)

Interface web para montar a lista da pelada, cadastrar os jogadores e sortear os times, feita em
HTML, CSS e JavaScript puro.

![HTML](https://img.shields.io/badge/HTML5-informational)
![CSS](https://img.shields.io/badge/CSS3-informational)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-informational)
[![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-informational)](LICENSE)

**Demonstração:** <https://wallakscardoso.github.io/pelada-gestao-front/>

## Sobre

É o front do sistema da pelada em microsserviços. O login e o cadastro de usuários falam com o
[spring-jwt-auth](https://github.com/WallaksCardoso/spring-jwt-auth); listas, jogadores e sorteios
falam com o [pelada-gestao](https://github.com/WallaksCardoso/pelada-gestao), enviando o token JWT
recebido no login. Sem framework e sem etapa de build: cada página tem seu HTML e seu script.

Existe também uma versão em Flutter: [pelada-gestao-front-web](https://github.com/WallaksCardoso/pelada-gestao-front-web).

## Funcionalidades

- Login e cadastro de usuário
- Criação de listas (sorteios) com jogadores por equipe e e-mail de notificação
- Cadastro de jogadores na lista, marcando goleiros
- Sorteio dos times Azul e Vermelho, com reservas
- Listas em andamento e listas fechadas (já sorteadas)
- Exclusão de jogadores e listas
- Tema claro e escuro, lembrado entre as visitas
- Avisos (toast) e indicador de carregamento

## Stack

- HTML5 e CSS3
- JavaScript puro, com Fetch API
- GitHub Pages para a publicação

## Como rodar

Não há instalação: basta servir a pasta com qualquer servidor estático, por exemplo a extensão Live
Server do VS Code (porta 5500) ou:

```bash
npx serve .
```

Os endereços dos backends ficam em `js/config.js`. Em `localhost` ou `127.0.0.1`, as páginas usam os
backends locais:

| Serviço | Endereço local | Produção |
| --- | --- | --- |
| Autenticação ([spring-jwt-auth](https://github.com/WallaksCardoso/spring-jwt-auth)) | `http://localhost:8081` | `https://spring-jwt-auth-jdli.onrender.com` |
| Pelada ([pelada-gestao](https://github.com/WallaksCardoso/pelada-gestao)) | `http://localhost:8080` | `https://pelada-gestao.onrender.com` |

Em qualquer outro endereço, usam os de produção.

## Estrutura

```
index.html        login
pages/            telas (home, cadastro de usuário, nova lista, jogadores, listas)
js/               endereços da API (config.js), um script por tela, tema e utilidades
css/              estilos e avisos (toast)
img/              imagem de fundo
```

## Projetos relacionados

- [pelada-gestao](https://github.com/WallaksCardoso/pelada-gestao): API de listas, jogadores e sorteio
- [spring-jwt-auth](https://github.com/WallaksCardoso/spring-jwt-auth): login e cadastro de usuários
- [pelada-gestao-front-web](https://github.com/WallaksCardoso/pelada-gestao-front-web): versão em Flutter

## Licença

[MIT](LICENSE)
