require('@nomiclabs/hardhat-waffle');
require('dotenv').config;

module.exports = {
  solidity: '0.8.0',
  networks: {
    ganache: {
      url: 'http://127.0.0.1:7545',
      chainId: 1337,
      accounts: process.env.PRIVATE_KEY,
    }
  }
}

