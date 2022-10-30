require('@nomiclabs/hardhat-waffle');

// this urs get from alchemy website...
// get pKey from wallet
// network ==> goerli

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/9hVgl_HIv_icjfTlu4szMZhe5Jq40xZp',
      accounts: ['29426e387c5a1878a553f55b3d46e176339a89f02a828a04850114adf8d26e5b'],
    },
  },
};