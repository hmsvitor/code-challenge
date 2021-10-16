//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Utility {
    struct Balance {
        address token;
        uint balance;
    }
    mapping (uint => Balance) public balances;

    function getBalances( address wallet, address[] memory tokens) external view returns(string[] memory) {
        for (uint i = 0; i < tokens.length; i++) {
            IERC20 token = IERC20(tokens[i]);
            balances[i] = Balance({
                token: tokens[i], balance: token.balanceOf(holder)
            });
        }
    }
}