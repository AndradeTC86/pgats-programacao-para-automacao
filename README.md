# PGATS-2026-03

# Programação para Automação de Testes

## Table of Contents

1. [Estrutura do Projeto](#estrutura-do-projeto)
2. [Setup Inicial](#setup-inicial)
3. [Executar Testes](#execute-os-testes)
4. [Integraçãoo GitHub Actions](#integração-com-github-actions)

### Estrutura do Projeto

```
|--- .github
|----- workflows
|------- main.yml
|--- src
|----- servicoDePagamentos.js
|--- test
|----- servicoDePagamentos.test.js
|--- package-lock.json
|--- package.json
```

### Setup Inicial

1. Necessário possui o node. Para instalar, rode o comando `npm install node` no terminal ou baixe o instalador [Node](https://nodejs.org/en/download/)
2. Execute o comando `npm install` para instalar as dependências

### Execute os testes

- Para executar os testes, rode o comando `npm test`
<p>

### Integração com GitHub Actions

  Esse projeto possui integração contínua através do GitHub Actions conforme configurações do arquivo main.yaml, disparada por 3 formas diferentes: 

  - Disparo manual através da ação `workflow_dispatch:`
  - Disparo agendado através da ação `schedule:` com o cron configurado para executar diariamente à meia-noite
  - Disparo a partir do push através da ação `push:` que executa após cada push feito para a branch `main`

  Os testes rodam na máquina Ubuntu mais recente, conforme a ação `runs-on:`
  A ação `actions/checkout@v4` faz o clone do projeto, enquanto que a ação `actions/setup-node@v4` realiza a instalação do Node.
  Depois disso, a pipeline instala as dependências, executa os testes unitários e publica os resultados através do GitHub Pages utilizando as ações:
  - Configura as páginas `actions/configure-pages@v4`
  - Faz o upload dos relatórios de teste`actions/upload-pages-artifact@v3`
  - Publica nas páginas `actions/deploy-pages@v4`
<p>