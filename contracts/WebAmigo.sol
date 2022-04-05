// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// class WebAmigo extends ERC20
contract WebAmigo is ERC20 {

    string public constant issuer = "Web Amigos";

    constructor() ERC20("WebAmigo", "WA") {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }
}
