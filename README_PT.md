
# Desafio Singu

[[English Version]](README.md)

## Visão Geral

Este projeto é uma aplicação baseada em Node.js e TypeScript, projetada para gerenciar pedidos em um ambiente de restaurante. Ele inclui funcionalidades como criação de pedidos, recuperação de pedidos e atualização do status dos pedidos. O projeto é organizado com foco em uma arquitetura limpa, incluindo controllers, services e models.

## Funcionalidades

- Criar um novo pedido
- Recuperar todos os pedidos
- Atualizar o status de um pedido
- Tratamento centralizado de erros

## Requisitos

- Node.js >= 14.x
- Yarn ou npm
- TypeScript

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/lucascraveiropaes/singu-challenge.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd singu-challenge
    ```

3. Instale as dependências:
    ```sh
    yarn install
    # ou
    npm install
    ```

## Executando a Aplicação

Para iniciar a aplicação em modo de desenvolvimento com recarregamento automático:

```sh
yarn dev
# ou
npm run dev
```

A aplicação estará rodando em `http://localhost:3000`.

## Executando os Testes

Para rodar a suíte de testes, utilize o seguinte comando:

```sh
yarn test
# ou
npm test
```

Isso irá rodar todos os testes e exibir os resultados no terminal.


## Estrutura do Projeto

```
src/
├── config/
├── features/
│   ├── order/
│   │   ├── controller.test.ts
│   │   ├── controller.ts
│   │   ├── model.test.ts
│   │   ├── model.ts
│   │   ├── routes.test.ts
│   │   ├── routes.ts
│   │   ├── service.test.ts
│   │   └── service.ts
│   ├── system/
│   │   ├── controller.test.ts
│   │   ├── controller.ts
│   │   ├-─ routes.test.ts
│   │   └── routes.ts
├── shared/
│   ├── middlewares/
│   │   └── error.ts
│   ├── codes.ts
└── index.ts
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contribuições

Contribuições são bem-vindas! Por favor, envie um pull request ou abra uma issue para discutir quaisquer mudanças ou melhorias.
