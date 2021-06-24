const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    ganache: {
      port: 7545
    }
  },
  compilers: {
    solc: {
      version: "0.8.6",
    }
  }
};
