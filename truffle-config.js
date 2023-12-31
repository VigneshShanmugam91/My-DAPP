
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {

  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', 
    },
    goerli: {
      provider: () =>
        new HDWalletProvider(process.env.SECRET_KEY, process.env.ENDPOINT_URL),
      network_id: 5,
      gas: 5500000,
      confirmations: 2, 
      timeoutBlocks: 200, 
      skipDryRun: true, 
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  
  compilers: {
    solc: {
      version: '0.8.11',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
