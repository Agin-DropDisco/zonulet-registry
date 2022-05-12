var ZonuletTokenRegistry = artifacts.require("ZonuletTokenRegistry");

module.exports = function(deployer){
  deployer.deploy(ZonuletTokenRegistry);
};