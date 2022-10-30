// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// this is our ethereum solidity smart contract.
// its use to transform the amount
// also store all the transation that come through it 

import "hardhat/console.sol";
// import "../node_modules/hardhat/console.sol";

contract Transactions {

    // global transaction counter of number type
    // its hold number of transaction 
    uint256 transactionCount;

    // this function call later | but make ready to this function.type of (type variableName)
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
  
    // create a structure, that most lock like JS object
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // array | type of TransferStruct structure Object 
    // so its array of objects
    TransferStruct[] transactions;


    // now its not return any thinh...
    // its just doing some actions...
    // we can call this function from our react application...
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        
        // increment the transactionCount number 1 by 1
        transactionCount += 1;

        // TransferStruct type of data | push into [transactions][array]...
        // msg. ==> immeditaly get, when we call this specfic function...
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        // call this function for execute...
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    // this function return ==> TransferStruct array from memory
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    // this function return ==> uint256 | number
    function getTransactionCount() public view returns (uint256) {
        // class global variable return from here...
        return transactionCount;
    }
}