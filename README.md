# GithubRepositoryList

O Projeto foi desenvolvido utilizando [Angular CLI](https://github.com/angular/angular-cli) Versão 6.0.8

### Antes de mais nada

Certifique-se que a máquina possui as seguintes instalações: 
- [Node](https://nodejs.org/) Versão 8.11.3
- [NPM](https://www.npmjs.com/) Versão 6.1.0
- [Angular CLI](https://github.com/angular/angular-cli) Versão 6.0.8

### Instalação e Uso
Instale o node e npm e utilize os comandos abaixo.

```sh
$ npm install
$ npm start
```

#### Gerando a build de produção.

Rode `npm run build` para gerar a build de produção com os arquivos minificados. Os arquivos da build serão armazenados na pasta `dist/` que será criada.
```sh
$ npm run build
```

#### Testes Unitários

Rode `npm run test` para executar os testes via [Karma](https://karma-runner.github.io).
```sh
$ npm run test
```

#### Implementação
- [Angular](https://angular.io/) versão 6.0.3
- [API do GitHub](https://developer.github.com/v3/) versão 3
- [RSCSS](http://rscss.io/) e [SASS](http://sass-lang.com/) para a escrita do css.
- [Webpack](https://webpack.js.org/) padrão do Angular CLI, pois o comando `ng eject` está desabilitado pela equipe Angular na versão 6.0.0 

#### Utilitários
* [GIT](https://git-scm.com/) - Controle de versões.
* [VSCode](https://code.visualstudio.com/) - Visual Studio Code

#### Requisitos
| Requisito | Implementação |
| ------ | ------ |
| HTML5 && CSS3 | OK |
| Layout responsivo. | OK |
| Pré-copiladores CSS | OK |
| Framework JavaScript | OK |
| Task Runner | OK |
| ECMAScript 2015+ (ES6) | OK* |
*Foi utilizado Typescript.


#### Bônus (ordenado por importância)
| Requisito | Implementação |
| ------ | ------ |
| Utilizar Angular | OK |
| Fazer testes unitários | X* |
| Utilizar SASS | OK |
| Montar seus estilos do zero | OK |
| Utilizar alguma implementação do Flux | X |
| Utilizar Typescript | OK |
| Utilizar Rxjs | OK |
| Utilizar Lint | OK |
| Utilizar Webpack | OK |
| Subir a aplicação em algum host cloud| X |
| Webpack - config próprio | X** |
*Os testes estão incompletos, mas o projeto está "testável" `npm run test`.
**Como mensionado acima o comando `ng eject` do Angular CLI está desabilitado pela equipe Angular na versão 6.0.0 
