// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
   uint256 transactionCount;  //To hold number of our transactions
   
   //Function that we are going to call later on here "address" is datatype
   event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
   
   //Similar to object but without declaring just specifying its properties
   struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    //So this is declaring transactions as an array of TransferStruct
    TransferStruct[] transactions;

    

    //here in parameters memory specifies that its stored in the memory so its optional
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        //In below 2 lines we are not doing anything but just storing information neither sending money or receiving just storing parameters in the array
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
       
       
        //To transfer the amount we are using emit (which is keyword to call event(specified at the top)) 
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);

    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;

    }

}