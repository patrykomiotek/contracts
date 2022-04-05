// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "hardhat/console.sol";

contract NetPeso is ERC20 {

    string public constant issuer = "Web Amigos";

    constructor() ERC20("NetPeso", "NP") {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    function hello() public view {
      console.log("Hello developers");
    }
}
