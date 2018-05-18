# Construtor de Formulários em Angular JS

Construtor de formulários feito com Angular JS e Bootstrap. (Apenas construção dinâmica dos campos em tela, SEM PERSISTÊNCIA)

## Instruções

Para ver o projeto funcionando no seu computador basta baixar o projeto, extrair seu conteúdo e abrir o arquivo index.html utilizando o navegador.
Como o projeto consiste apenas na parte que diz respeito a geração dinâmica de formulários em tela, não é necessária a instalação de quaisquer ambiente de desenvolvimento.

OBS: O projeto é responsivo e caso você queira conferir como ficaria no seu aparelho, talvez seja necessário o download de um aplicativo visualizador de HTML. 
Com isso basta copiar a estrutura do projeto para o disposítivo e abrir o arquivo index.HTML utilizando o aplicativo baixado.

## Estrutura do projeto
Esse projeto apresenta a seguinte estrutura:
```
css
  - bootstrap.css
  - fontawesome-all.css
  - style.css
js
  - angular.min.js
  - bootstrap.min.js
  - FormBuilderController.js
- index.html
```
OBS: A pasta *webfonts* contém os arquivos de fontes necessários para o uso dos ícones do projeto, por esse motivo seu conteúdo foi deliberadamente ocultado

## Resumo do projeto

### style.css

O arquivo style.css não tem muito mistério. Ele dispõe de algumas customizações de estilo que foram necessárias apenas para dar uma customizada simples ao projeto. A maioria das estilizações foram feitas no HTML utilizando as classes do bootstrap.

### index.html

O arquivo index.html é composto basicamente por três tags `<section>`: 
* A primeira `<section>` corresponde ao trecho de código que será responsável por exibir as mensagens de erro de validação ou de sucesso;
* A segunda `<section>` correspode ao trecho de código que contém o formulário necessário para incluir os parâmetros do campo que será incluído no formulário;
* A terceira `<section>` corresponde ao trecho de código que será responsável por renderizar dinamicamene os campos incluídos no formulário, e opções de remoção ou edição dos respectivos campos.

### FormBuilderController.js
O arquivo FormBuilderController.js é o Controller da nossa aplicação e tem como funcionalidade basicamente toda e qualquer operação de validação dos campos, inclusão, exclusão e edição dos campos do formulário gerado.
O Controller é composto basicamente pelas variáveis de escopo e métodos a seguir:

#### Variáveis

NOME | FUNCIONALIDADE 
--- | --- 
`$scope.campos` | Array de objetos responsável por armazenar todos os campos incluídos no formulário
`$scope.novoCampo` | Objeto que recebe os parâmetros do campo a ser inserido no formulário
`$scope.edicao` | Variável booleana que serve para controlar quando o campo é um novo campo ou quando é um campo sendo editado (serve também para, em caso de edição, receber o valor do campo a ser editado)
`$scope.sucesso` | Variável booleana que serve para controlar quando exibir a mensagem de *Sucesso* ou não
`$scope.erroRotuloCampo` | Variável booleana que serve para controlar quando exibir a mensagem de erro de *Rótulo do Campo Vazio*
`$scope.erroTipoCampo` | Variável booleana que serve para controlar quando exibir a mensagem de erro de *Tipo do Campo Vazio*
`$scope.erroOpcoesCampo` | Variável booleana que serve para controlar quando exibir a mensagem de erro de *Campo Multivalorado sem Opções Definidas*
`$scope.erroOpcaoVazia` | Variável booleana que serve para controlar quando exibir a mensagem de erro de *Opcao de Campo Multivalorado Vazia*

#### Métodos

NOME | FUNCIONALIDADE 
--- | --- 
`validarCampos()` | Método utilizado para realizar as validações dos campos de inclusão de novo item no formulário. São obrigatórios os campos *Rótulo do Campo* e *Tipo do Campo*, caso o tipo do campo seja definido como *Lista Suspensa, Seleção Múltipla ou Radio* também é obrigatória a inclusão de ao menos uma Opção não podendo estar vazia
`salvarCampo()` | Método responsável por executar a validação dos campos de inclusão de novo item (Método `validarCampos()`) e salvar o novoCampo na variável `$scope.campos`. Dependendo do valor da variável `$scope.edicao` executa a edição de um campo existente ou inclusão de um novo campo
`editarCampo(campo)` | Esse método recebe como parâmetro o campo a ser editad e é responsável por alterar o valor da variável `$scope.edicao` para `true` e alterar o valor da variável `$scope.novoCampo` para o valor do campo a ser editado. Após esse método ser chamado, ao executar-se o método `salvarCampo()` o mesmo verificará que se trata de uma edição e não incluirá um novo campo
`remover(campo, campos)` | Método responsável por remover um determinado campo ou uma opção de campo multivalorado. Ele recebe como parâmetros o item a ser removido (campo) e onde o lugar de onde deve ser removido(campos)
`mudouTipoCampo(tipo)` | Esse método recebe como parâmetro o tipo do campo e serve para controlar quando determinadas coisas serão renderizadas na tela. Dependendo do tipo de campo escolhido a ser inserido, serão renderizadas opções de definição de Instruções do Campo ou Obrigatoriedade. Ele também serve para, renderizar de forma correta os campos que já foram incluídos no formulário
`adicionarOpcao()` | Método responsável por criar um Array de Opcoes dentro do Objeto `$scope.novoCampo` em caso de Campos Multivalorados e caso esse Array já exista incluir um objeto dentro dele
`mostrarObrigatorio()` | Método responsável por definir se a opção de obrigatoriedade será renderizada na tela. Os tipos de campo *Título* e *Subtítulo* não podem ser obrigatórios
`mostrarInstrucao` | Método responsável por definir se a opção de definição de Instrução do campo será renderizada na tela. Os tipos de campo *Título, Subtítulo, Seleção Múltipla, Radio e Caixa de seleção* não possuem opção de Instrução

## Considerações Finais

Como dito anteriormente, esse projeto consiste apenas na parte de criação dinâmica do formulário em tela, portanto não possui back-end nem foi definida conexão alguma com nenhum endpoint. Porém a ideia é exatamente essa, disponibilizar agora esse projeto que consiste basicamente em traçar uma solução para geração dinâmica de formulários e conseguir criar um tipo de estrutura flexível para objetos/itens gerados dinamicamente. Mais tarde bastaria pegar o conteúdo da variável `$scope.campos` e consumir um serviço REST enviando esse conteúdo como JSON, sendo assim basicamente essa variável é "o mais proximo de back-end" que esse projeto terá.

Porém, a intenção é utilizar a solução desse projeto posteriormente e adicionar algumas coisas para consumir serviços REST que serão criados utilizando C# web API, Java e NodeJS e serão postados em repositórios separados aqui.

















