//this js file will deploy our transactions
const hre = require('hardhat')

async function main() {
  const hasttarCoinFactory = await hre.ethers.getContractFactory('HasttarCoin')
  const hasttarCoin = await hasttarCoinFactory.deploy()

  await hasttarCoin.deployed()

  console.log('Hasttar Coin deployed to:', hasttarCoin.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
