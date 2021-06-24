# Getting started

1. `npm i && cd client && npm i` - Install all dependencies
2. `npm run dev` - Start Truffle dev server/blockchain
3. `npm run migrate` - Migrate Smart Contracts to Dev server
4. `cd client && npm run dev` - Move to client directory and start Next dev server
5. [Open browser](http://localhost:3000)


# Commands
* `npm run dev` - Start Truffle development server 
* `npm run test` - Test smart contracts
* `npm run test:all` - Test smart contracts and client
* `npm run migrate` - Run development migrations
* `npm run migrate:ganache` - Run ganache migration

# Client Commands
* `npm run dev` - Start NextJS development server
* `npm run start` - Start server serving NextJS export 
* `npm run build` - Build and Export NextJS application
* `npm run test` - Run test-suite
* `npm run test:watch` - Run test-suite in watch mode
* `npm run test:watch -- FILE_REGEX` - Run test-suite in watch mode for file regex
* `npm run lint` - Run linter
* `npm run lint:fix` - Run linter in fix mode
* `npm run storybook` - Start storybook server

# Info

This project is build upon official truffle react box. However, the client is completelly replaces with custom NextJs configuration.

## Client Technologies
* NextJs
* TailwindCss
* Typescript
* Jest
* React-testing-library
* Storybook
* Eslint
* Prettier
* React
* Web3