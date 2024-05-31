## Teste Tecnico API-RAMENGO

## Descrição
API-RAMENGO é uma API REST que permite somente a busca de caldos e proteinas para o usuario montar o seu prato.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Docker](https://www.docker.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/marcoismael/api-ramengo>

# Acesse a pasta do projeto no terminal/cmd
$ cd api-ramengo

# Realize o build da imagem do projeto.
$ docker build -t api-ramengo .

# Execute o container do projeto.
$ docker run -dp 127.0.0.1:3002:3002 api-ramengo

# O servidor inciará na porta:3002 - acesse <http://localhost:3002>
```

### Como utilizar
Para utilizar a API, basta acessar o link <http://localhost:3002/broths> para listagem dos caldos e <http://localhost:3002/protein> para listagem das proteinas,
após selecionar os ingredientes que preferir basta realizar uma requisição post para a rota /order com o seguinte body: {"brothId": "1", "proteinId": "1"} e terá
um novo pedido ja com o Id.

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
