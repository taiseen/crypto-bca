// responsible to deploying the contract...
const main = async () => {

  // get (***.sol) contract file from "contract" folder 
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");

  // now deploy this (***.sol) contract file...
  const transactionsContract = await transactionsFactory.deploy();

  // contract deployed...
  await transactionsContract.deployed();
  // ? but for deploying our contract we need some amount of ethereum in our digital wallet
  // ? every thing in ethereum network is required known as gas
  // ? small fraction of ethereum is use to make something happen
  // ? so we How to fund the gas to test the ethereum... for the deployment of our contract at blockchain network
  // ? answers is now ==> Matamask ==> goerli faucet

  // when we run this script... 
  // transaction address is going to print at console...
  console.log("Transactions address: ", transactionsContract.address);
};


const runMain = async () => {

  try {
    await main();           // ? call main() function ==> for execute & deploy our smart contract...
    process.exit(0);        // ? its mean process going to successful
  } catch (error) {
    console.error(error);
    process.exit(1);        // ? its mean process going to not successful
  }
};

runMain();                  // * at 1st this line is going to executed...