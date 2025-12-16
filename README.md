# recruitment-portal-automation
Cypress test automation of a recruitment website
## Framework Utilizado

I used Cypress because of its versatibility and because its simple to explain step by step once you analyse the code due to its transparency.

## Strategy

I organized the automation separating the assets in "features" ; "commands" and "elements" in a page by page basis and the "steps" folder to contain the actual process tested.

Organizing the assets in this way the maintenance, you have an easier time building up the automation once new scenarios appear and you also have less redundant code because you can reuse the code more efficiently.

About the "steps" folder, I decided to use only one archive initially because of its reduced size but in the future I would possibly organize it either in a page by page like the other assets or in a metrics criteria depending on the objective.


## Pre-requisites
TO run the test scenarios in Gherkin using Cypress, follow the steps:

Make sure you have Node.js installed. Execute:

```bash
npm install --save-dev cypress
```
Install the necessary dependencies, including Cypress Gherkin plugin:
```bash
npm install cypress @badeball/cypress-cucumber-preprocessor
```
```bash
npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild
```

## VSCode Extensions
Cucumber (Gherkin) Full Support


### **Inicializing Cypress:**

After installed, you have to inicialize Cypress with:

```bash
npx cypress open
```

Which will open the Cypress graphic interface.

#### **Command line execution:**

You can execute tests in second screen using command line:

```bash
npx cypress run
```
## Author

[@MárcioCunha](https://github.com/MarcioVieiraDaCunhaFilho)
 ## Contato
* E-mail: mvcf09@gmail.com
* Telefone: (55)99165-5015
* [LinkedIn](https://www.linkedin.com/in/marcio-vieira-da-cunha-filho/)
