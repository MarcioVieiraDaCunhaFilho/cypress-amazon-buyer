# cypress-amazon-buyer
Repositório para automação de testes Amazon buyer cypress
## Framework Utilizado

Utilizei Cypress, pois tenho familiaridade com ele e acredito ser uma ótima opção para a resolução do desafio proposto.

## Estratégia

Optei por organizar a automação em 'feature'. 'commands' por página , 'elements' por página, 'steps'.

Acredito a sepação por página torna a manutenção mais fácil quando se tem a intenção de automatizar todas a aplicação e seus elementos, evitando grandes arquivos com todos os elementos e comando agrupados, e tornando possível  também o reaproveitamento de código.

Sobre os 'steps', optei por implementar todos em apenas um arquivo, por se tratarem de poucas linhas, mas futuramente organizaria melhor e realizaria a granularização necessária.


## Pré-Requisitos
Para rodar os cenários de teste escritos em Gherkin usando Cypress, siga os seguintes passos:

Certifique-se de que você tenha o Node.js instalado. Em seguida, execute:

```bash
npm install --save-dev cypress
```
Instale as dependências necessárias, incluindo o Cypress e o plugin de Gherkin:
```bash
npm install cypress @badeball/cypress-cucumber-preprocessor
```
```bash
npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild
```

## Extensões VSCode
Cucumber (Gherkin) Full Support


### **Inicialização do Cypress:**

Depois de instalado, você pode iniciar o Cypress com:

```bash
npx cypress open
```

O que abrirá a interface gráfica do Cypress.

#### **Execução em Linha de Comando:**

Você pode executar seus testes em segundo plano usando a linha de comando:

```bash
npx cypress run
```
## Autor

[@MárcioCunha](https://github.com/MarcioVieiraDaCunhaFilho)
 ## Contato
* E-mail: mvcf09@gmail.com
* Telefone: (55)99165-5015
* [LinkedIn](https://www.linkedin.com/in/marcio-vieira-da-cunha-filho/)

