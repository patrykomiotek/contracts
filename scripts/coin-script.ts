// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Coin = await ethers.getContractFactory("Coin");
  const coin = await Coin.deploy();

  await coin.deployed();

  console.log("Coin deployed to:", coin.address);

  const toAddress = "0x62fB544DdB32F28A65Fe5d7D48Ac218184eC55C6";
  const amount = 21;

  // const coinTx = await coin.send(toAddress, amount);

  // console.log("Minter: ", coin.);
  // console.log("Balances: ", coin.balances);

  await coin.deployTransaction.wait()

  // wait until the transaction is mined
  // await coinTx.wait();

  // console.log("Greeter deployed to:", coinTx);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
