var SimpleStorage = artifacts.require("./Cryptolette.sol");

module.exports = function(deployer) {
  deployer.deploy(Cryptolette);
};
