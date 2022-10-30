> 30 - Oct - 2022

# Smart Contract 

## step by step process of working...

## For smart contract :-

* yarn add -D chai
* yarn add -D hardhat
* yarn add -D @nomiclabs/hardhat-waffle
* yarn add -D @nomiclabs/hardhat-ethers
* yarn add -D ethers
* yarn add -D ethereum-waffle

* yarn add -D @nomicfoundation/hardhat-toolbox
* yarn add -D @nomicfoundation/hardhat-network-helpers 
* yarn add -D @nomicfoundation/hardhat-chai-matchers 
* yarn add -D @nomiclabs/hardhat-etherscan 
* yarn add -D solidity-coverage 
* yarn add -D hardhat-gas-reporter 
* yarn add -D typechain 
* yarn add -D @typechain/hardhat 
* yarn add -D @typechain/ethers-v5 
* yarn add -D @ethersproject/abi 
* yarn add -D @ethersproject/providers

## all in one line for installation...
```
yarn add -D chai hardhat @nomiclabs/hardhat-waffle @nomiclabs/hardhat-ethers ethers ethereum-waffle @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers  @nomicfoundation/hardhat-chai-matchers  @nomiclabs/hardhat-etherscan  solidity-coverage  hardhat-gas-reporter  typechain  @typechain/hardhat  @typechain/ethers-v5  @ethersproject/abi  @ethersproject/providers 
```

## Hardhat 

* Ethereum development environment for professionals.
* Its also allow us to run Solidity locally. 
* So we can test our contract before deploying it.

```
npx hardhat
npx hardhat test  <== for testing...
```

## Ethers

* A complete Ethereum wallet implementation & utilities in JavaScript

## Steps

* 1st - go to ==> contracts <== folder & create 1st solidity contract `.sol` file
    * after writing the smart contract...
    * its time to testing for deploying this contract... 
    * for that need some setup... so do 2nd step

* 2nd - go to ==> scripts <== folder & create deploy`.js` file

* Ropsten Faucet ==> for ethereum gas
* MetaMask is an extension for accessing Ethereum enabled distributed applications, or "Dapps" in your browser!

* 3rd - go to ==> hardhat.config.js <== & write needful config code... 


* npx hardhat run scripts/deploy.js --network goerli

* abi ==> application binary interface
standers way to interact with ethereum echo system...


<!-- 
Compiled 2 Solidity files successfully
Transactions address:  0xcf48CD062D09A002dcCb670E01beb4E99cF80884 
use this address to our client side applications...
-->