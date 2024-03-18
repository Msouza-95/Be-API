# Be API

## Descrição

Be consiste em estruturar uma API RESTful conectada a um banco de dados.
Trata-se de um sistema que permite cadastrar usuários externos. Ao realizarem login, estes usuários deverão poder registrar clientes, produtos e vendas.


## Installation

### criar na raiz do projeto um arquivo de nome ".env" e compiar os dados que estão no aquivo  ".env.example"

### O banco de dados foi feito em docker.
### Utilizar o seguinte comando na pasta raiz do projeto:  

```bash
$ docker-compose up -d
```

## Running the app

### Executar a Api:

```bash
$ npm run dev
```
## ou 

```bash
$ yarn dev
```
## forma de testar as rotas

### disponibilizei na pasta Insomnia desse projeto, o arquivo do insomina do projeto já configurando, basta apenas importar o arquivo.

[Insomina](https://github.com/Msouza-95/Be-API/tree/master/Insomnia) 

## Rotas do sistema que foram feitas 

### Uses
- [X] cadastro de usuário do sistema (signup);
- [X] login com JWT de usuário cadastrado (login);
      
### clientes
- [X] listar todos os clientes cadastrados (index)
- [X] apenas dados principais devem vir aqui;
- [X] ordenar pelo id;
- [X] detalhar um(a) cliente e vendas a ele(a) (show):
- [X] trazer as vendas mais recentes primeiro;
- [X] possibilidade de filtrar as vendas por mês + ano;
- [X] adicionar um(a) cliente (store);
- [X] editar um(a) cliente (update);
- [X]  excluir um(a) cliente e vendas a ele(a) (delete);

### produtos:
- [X] listar todos os produtos cadastrados (index):
- [X] apenas dados principais devem vir aqui;
- [X] ordenar alfabeticamente.
- [X] detalhar um produto (show);
- [X] criar um produto (store);
- [X] editar um produto (update);
- [X] exclusão lógica ("soft delete") de um produto (delete);

### vendas:

- [X] registrar venda de 1 produto a 1 cliente (store).
- [ ] Observação: as rotas em clientes, produtos e vendas só devem poder ser acessadas por usuário logado.

### dificuldades encontradas.

No processo de desenvolvimento, enfrentei desafios significativos ao implementar o recurso de autenticação. Uma das principais dificuldades foi o prazo limitado para aprender um novo framework em apenas uma semana e, infelizmente, a forma como implementei não foi bem-sucedida em fazer o recurso funcionar como esperado.

Embora eu tenha me esforçado ao máximo para dominar o framework no tempo disponível, reconheço que houve lacunas no meu conhecimento e na minha compreensão da implementação. No entanto, encarei essa situação como uma oportunidade de aprendizado e busquei compreender onde cometi erros e como posso melhorar no futuro


## License

Nest is [MIT licensed](LICENSE).


