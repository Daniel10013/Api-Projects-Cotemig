
## Documentação da API

#### Retorna todos os pokemons

```http
  GET /api/pokemons
```
#### Retorna um pokemon específico

```http
  GET /api/pokemon/${name}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do pokemon que você quer |


#### Cria um usuário

```http
  POST /api/create-user
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do seu usuário |
| `password`      | `string` | **Obrigatório**. A senha do seu usuário |


#### Verificação de usuário

```http
  POST /api/login
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do seu usuário |
| `password`      | `string` | **Obrigatório**. A senha do seu usuário |
