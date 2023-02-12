//SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
// Inhherit the Engine function (already compiled)
import "./Engine.sol";
  
contract Game is Engine {
    function play(uint userGuess) public view returns (bool) {
    // Generate two numbers randomly using the function subsequently established
        //Copy and paste of the function provided in GeeksforGeeks
        uint random_number_1 = uint(keccak256(abi.encodePacked(block.timestamp))) % 3;
        uint random_number_2 = uint(keccak256(abi.encodePacked(block.timestamp, random_number_1))) % 3;

    // Call the function from the Engine contract (in my case, the bitwiseAnd) 
        uint comparison = bitwiseAnd(random_number_1, random_number_2);

    // Return a boolean: true = correctly guessed; false = wrong guess.
    if (comparison == userGuess) {
        return true;
    } else {
        return false;
    }
    }
}

