# Desafio Front-End

<img src="https://privatecode.com.br/web/assets/img/logo.png" width="600px">

Desafio realizado para o processo seletivo da Private Code.

## Iniciando

Links de acesso:

Aplicação: 

```bash
https://desafio-private-code-gustavo-fernandes.vercel.app/
```

Endpoints:

A integração com a API é realizada através do JSON Server. Para iniciar, siga estes passos:

- Faça o download do arquivo db.json na raiz do projeto
- Adicione o script ```"api": "json-server --watch db.json -p 8080"``` no package.json
- Digite o comando ```yarn api``` para executar o script 

Os dados serão fornecidos nas seguintes URLs:

```bash
http://localhost:8080/produtos/
http://localhost:8080/pedidos/
http://localhost:8080/categorias/
```

## O desafio

Para este desafio foram solicitadas as seguintes funcionalidades:

- Separação e listagem de produtos por categoria
- Pesquisa global de produtos
- Adicionar produtos ao carrinho e suas quantidades
- Validar o CEP digitado pelo usuário utilizando a API do ViaCEP
- Preencher os campos de endereço com os dados do ViaCEP
- Calcular o total do pedido em tempo real
- Finalizar o pedido enviando os dados para a API

## Testando o projeto

### Tela inicial

Na tela inicial, os produtos estão listados de maneira global. A lista possui um scroll vertical invisível, possibilitando a navegação de forma mais fluida. (verificar se a API está online para aparecer os produtos)

Para a listagem de produtos por categoria, basta selecionar um dos itens do menu de navegação, que é um slider. Ao selecionar o mesmo menu, o filtro é desligado e a lista volta para sua forma inicial.

Para a pesquisa global de produtos, basta escrever no input de pesquisa, que automaticamente será feita a busca em tempo real. Ao apagar todo o campo e clicar fora do input, a pesquisa é desfeita, retornando à lista original.

### Card de produtos

Ao clicar em um produto, será aberto um modal, que é o card de produtos. Nele, é possível adicionar o produto ao carrinho, indicando a sua quantidade através de um contador. Ao adicionar um produto com “0” quantidades, o modal apenas fechará, retornando à tela inicial. Clicando no “x” ou clicando fora do modal, a tela também fechará.

### Carrinho

Assim que um produto for adicionado ao carrinho, ele aparecerá na tela do carrinho. Ao tentar incluir o mesmo produto mais de uma vez, ao invés de adicionar mais um item ao carrinho, será adicionado à quantidade do produto. O valor total do pedido será calculado automaticamente. Ao clicar em cancelar, o carrinho é apagado. Clicando em finalizar, é aberto o card de entrega. Caso clique em finalizar com o carrinho vazio, nada acontecerá.

### Card de entrega

O card de entrega é um modal com um formulário para preenchimento das informações de entrega. Ao digitar um CEP válido e clicar fora do campo, os demais campos pertinentes ao endereço serão preenchidos automaticamente através da API do ViaCEP. Validando todos campos necessários e clicando em continuar, será aberta a tela de conclusão do pedido.

### Conclusão do pedido

Ao aparecer o modal de conclusão de pedido, quer dizer que os dados já foram enviados para a API.
