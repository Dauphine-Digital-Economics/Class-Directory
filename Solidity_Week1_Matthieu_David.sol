// Exercise 2 - Simple Converter to Decimal 
// Part A - String Conversion (5 points)

pragma solidity ^0.6.0;

contract Binary_World {

    function Converter_to_Dec(string memory binary_Num) public pure returns (uint256){
        uint256 decimal = 0;
        uint256 length = binary_Num.length;
        //for loop to go through each character of the binary input, it similar to spliting the array
        for (uint i=0; i<length; i++){
            //on each character, we evaluate each caracter 
            uint8 c = uint8(binary_Num[length-i-1]);
            require(c == 48 || c == 49, "Invalid binary number"); //if condition not met, print message  
            //calculate the corresponding value based on position
            decimal += (c * (2 ** i));
        }
    return decimal;
    }
}

// As we are required to perform masking on a 
contract Binary_Decomposer {
    // looking at the function input : 
    // > we use dynamic array so that result size vary depending on the input value, to save gas 
    // > declaring result allow an explicit return to save gas 
    // > the pointer here allows the function to write the decomposition results directly
    function decompose(uint8 num, uint8[] storage result) external view {
        require(result.length >= 8, "Result array must have capacity for 8 elements");  // downside of dynamic array, is specifying a constraint

        for (uint8 i = 0; i < 8; i++) {
            // Create a bit-shifted mask for each position
            uint8 mask = 1 << i;

            // Use bitwise AND to check if the bit at the current position is set
            if (num & mask != 0) {
                result[i] = mask;
            } else {
                result[i] = 0;
            }
        }
    }

}