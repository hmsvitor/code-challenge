const HmsContract = artifacts.require("Hms");

module.exports = function (deployer) {
  deployer.deploy(HmsContract);
};
