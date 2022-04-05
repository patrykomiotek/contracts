import { expect } from "chai";
import { ethers } from "hardhat";

describe("Coin", function () {
  it("Should return something", async function () {
    const Coin = await ethers.getContractFactory("Coin");
    const coin = await Coin.deploy();
    await coin.deployed();

    const coinTx = await coin.send("0x62fB544DdB32F28A65Fe5d7D48Ac218184eC55C6", 2);

    // expect(await coin.send("0x62fB544DdB32F28A65Fe5d7D48Ac218184eC55C6", 2)).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await coinTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
