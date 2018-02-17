pragma solidity ^0.4.18;

contract PrivateBankI {
    mapping (address => uint) public balances;

    uint public MinDeposit = 1 ether;

    function Deposit() public payable;

    function CashOut(uint _am);

    function() public payable;
}

