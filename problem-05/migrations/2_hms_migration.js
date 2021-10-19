const HmsContract = artifacts.require("Hms");
const TokenContract = artifacts.require("Token");
const UtilityContract = artifacts.require("Utility");

module.exports = function (deployer) {
  deployer.deploy(HmsContract);
  deployer.deploy(TokenContract);
  deployer.deploy(UtilityContract);
};
