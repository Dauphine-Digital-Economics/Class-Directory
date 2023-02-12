//SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

// Boolean Algebra function
contract BooleanAlgebraFunction {
    function bitwiseAnd(uint binary_1, uint binary_2) public pure returns (uint) {
        return binary_1 & binary_2;
    }
    function bitwiseOr(uint binary_1, uint binary_2) public pure returns (uint) {
        return binary_1 | binary_2;
    }
    function bitwiseNot(bool binary_1) public pure returns (bool) {
        return !binary_1;
    }
}

// Bit Shift function
contract BitShiftFunction {
    function bitShift(uint userInput, uint shift) public pure returns (uint) {
        return userInput << shift;
    }
}

// Putting all together with mask and the operations in order to get return the array with shift of 8 with uint8 input 
contract MaskingBitwiseOperations{
    //function should take in an uint8    and return an array []
    function MaskingBitwise(uint8 userInput) public pure returns (uint[]) {
         //instantiate needed variables
        uint i = 0;
        //uint[256] memory array;
        uint[] memory array = new uint[](8);
        uint mask = 1;

        // loop 8 times to get every bit (++ <- operaor which increases the integer value by one)
        for (i; i < 8; i++) {
            if ((userInput & mask) != 0) {
                array[i] = mask;
            }
            //uint y = x << 1 
            mask = mask << 1;
        }
        //return an array of integers
        return array;
    }

}
