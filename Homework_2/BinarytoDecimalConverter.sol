//SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;


// Exercise 1. Binary to Decimal using a string conversion method
contract BinaryToDecimalConverter{
    //a function that intakes a binary number as a string  and returns integer
    function binaryToDecimal(string memory binary) public pure returns (uint){
         //instantiate needed variables
        uint i = 0;
        uint length = bytes(binary).length;
        uint decimal = 0;
        //check if the first bit is 1
        if (bytes(binary)[0] == "1"){
    } 
    // each digit represents a power of 2 which gets added into the total if the digit is 1
        for (i; i < length; i++) {
            if (bytes(binary)[length - i - 1] == '1') {
                decimal += 2 ** i;
            }
        }
        return decimal;
    }
}
