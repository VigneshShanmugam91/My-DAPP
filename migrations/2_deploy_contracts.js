
const Meteortrading = artifacts.require('Meteortrading')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

    await deployer.deploy(Meteortrading, 'Meteortrading', 'TNT', 10, accounts[1])
}
