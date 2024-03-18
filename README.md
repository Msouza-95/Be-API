# Be API

## Descrição

Be consiste em estruturar uma API RESTful conectada a um banco de dados.
Trata-se de um sistema que permite cadastrar usuários externos. Ao realizarem login, estes usuários deverão poder registrar clientes, produtos e vendas.




## Rotas do sistema que foram feitas 


- [X] O sistema deve contar com rotas para:
- [X] cadastro de usuário do sistema (signup);
[X] login com JWT de usuário cadastrado (login);
clientes:
listar todos os clientes cadastrados (index)
apenas dados principais devem vir aqui;
ordenar pelo id;
detalhar um(a) cliente e vendas a ele(a) (show):
trazer as vendas mais recentes primeiro;
possibilidade de filtrar as vendas por mês + ano;
adicionar um(a) cliente (store);
editar um(a) cliente (update);
excluir um(a) cliente e vendas a ele(a) (delete);
produtos:
listar todos os produtos cadastrados (index):
apenas dados principais devem vir aqui;
ordenar alfabeticamente.
detalhar um produto (show);
criar um produto (store);
editar um produto (update);
exclusão lógica ("soft delete") de um produto (delete);
vendas:
registrar venda de 1 produto a 1 cliente (store).
Observação: as rotas em clientes, produtos e vendas só devem poder ser acessadas por usuário logado.



