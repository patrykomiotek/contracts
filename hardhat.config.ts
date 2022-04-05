import { task } from "hardhat/config";
// const task = require("hardhat/config");
import "@nomiclabs/hardhat-waffle";
// require("@nomiclabs/hardhat-waffle");
import "@nomiclabs/hardhat-ganache";
// require("@nomiclabs/hardhat-ganache");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "local-ganache",
  networks: {
    "local-ganache": {
      url: "http://127.0.0.1:7545"
    },
    hardhat: {
    },
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/YehURFwRnvXTsKHevf_6zaPtp0CsQunk",
      accounts: ["f3ddbd0f1d6f0df7d5f742f2c95a12f10274fd531bf07e8a115d9ccf8183dd1a", ]
    },
    // rinkeby: {
    //   url: "https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
    //   accounts: [privateKey1, privateKey2, ...]
    // }
  },
};
