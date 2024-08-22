# Singu Challenge

[[Versão em Português]](README_PT.md)

## Overview

This project is a Node.js and TypeScript-based application designed to manage orders in a restaurant setting. It includes features like creating orders, retrieving orders, and updating the status of orders. The project is organized with a focus on clean architecture, including controllers, services, and models.

## Features

- Create a new order
- Retrieve all orders
- Update the status of an order
- Centralized error handling

## Requirements

- Node.js >= 14.x
- Yarn or npm
- TypeScript

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/lucascraveiropaes/singu-challenge.git
    ```

2. Navigate to the project directory:
    ```sh
    cd singu-challenge
    ```

3. Install dependencies:
    ```sh
    yarn install
    # or
    npm install
    ```

## Running the Application

To start the application in development mode with hot-reloading:

```sh
yarn dev
# or
npm run dev
```

The application will be running on `http://localhost:3000`.

## Running Tests

To run the test suite, use the following command:

```sh
yarn test
# or
npm test
```

This will run all tests and display the results in the terminal.

## Project Structure

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes or improvements.
