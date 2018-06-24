# GithubRepositoryList

Aplicação em Angular para listagem de repositórios do GitHub.

### Instalação e Uso
Instale o [Node](https://nodejs.org/) e [NPM](https://www.npmjs.com/) e utilize os comandos abaixo.

```sh
$ npm install
$ npm start
```

#### Gerando a build de produção.

A build de produção será armazenados na pasta `dist/` que será criada com os arquivos minificados e otimizados.
```sh
$ npm run build
```

#### Testes Unitários

Os testes serão rodados via [Karma](https://karma-runner.github.io).
```sh
$ npm run test
```

#### Implementação
- [Angular](https://angular.io/) versão 6.0.3
- [API do GitHub](https://developer.github.com/v3/) versão 3
- [RSCSS](http://rscss.io/) e [SASS](http://sass-lang.com/) para a escrita do css.
- [Karma](https://karma-runner.github.io) padrão de testes do Angular.
- [Webpack](https://webpack.js.org/) padrão do Angular CLI.

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
| ECMAScript 2015+ (ES6) | OK |

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

**O comando `ng eject` do Angular CLI está desabilitado pela equipe Angular na versão 6.0.0 
