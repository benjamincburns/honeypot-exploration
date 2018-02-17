var Log = artifacts.require('./Log.sol')
var Private_Bank = artifacts.require('./Private_Bank.sol')

module.exports = async function(deployer) {
  return deployer.then(async () => {
    if (/(local)/.test(deployer.network)) {
      await deployer.deploy(Log)
      let logContract = await Log.deployed();

      await deployer.deploy(Private_Bank, logContract.address)
      let bankContract = await Private_Bank.deployed()
    }
  })
}
