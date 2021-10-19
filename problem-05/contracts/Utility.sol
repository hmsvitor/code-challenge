//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

interface ERC20Interface {
    function balanceOf(address whom) view external returns (uint);
}

contract Utility {
    struct Balance {
        address token;
        uint balance;
    }
    Balance[] private _balances;
    
   function getBalances(address[] memory _tokenAddress, address _addressToQuery) public returns (Balance[] memory) {
        for (uint i = 0; i < _tokenAddress.length; i++) {
            Balance memory b;
            b.token = _tokenAddress[i];
            b.balance = ERC20Interface(_tokenAddress[i]).balanceOf(_addressToQuery);
            _balances.push(b);
        }
        return _balances;
    }
}