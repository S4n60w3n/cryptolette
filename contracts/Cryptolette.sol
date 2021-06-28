// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract Cryptolette {
    enum FieldColor {
        ZERO,
        BLACK,
        RED
    }
    enum FieldNumberType {
        ZERO,
        EVEN,
        ODD
    }
    enum FieldNumberValue {
        ZERO,
        UP_TO_18,
        MORE_THAN_18
    }

    mapping(uint256 => bool) public redFields;

    constructor() {
        redFields[1] = true;
        redFields[3] = true;
        redFields[5] = true;
        redFields[7] = true;
        redFields[9] = true;
        redFields[12] = true;
        redFields[14] = true;
        redFields[16] = true;
        redFields[18] = true;
        redFields[19] = true;
        redFields[21] = true;
        redFields[23] = true;
        redFields[25] = true;
        redFields[27] = true;
        redFields[30] = true;
        redFields[32] = true;
        redFields[34] = true;
        redFields[36] = true;
    }

    function getFieldColor(uint256 fieldNumber)
        public
        view
        returns (FieldColor)
    {
        if (fieldNumber == 0) {
            return FieldColor.ZERO;
        }
        if (redFields[fieldNumber]) {
            return FieldColor.RED;
        }
        return FieldColor.BLACK;
    }
    
    function getFieldNumberType(uint256 fieldNumber)
        public
        pure
        returns (FieldNumberType)
    {
        if (fieldNumber == 0) {
            return FieldNumberType.ZERO;
        }
        if (fieldNumber % 2 == 0) {
          return FieldNumberType.EVEN;
        }
        return FieldNumberType.ODD;
    }

    function getFieldNumberValue(uint256 fieldNumber)
        public
        pure
        returns (FieldNumberValue)
    {
        if (fieldNumber == 0) {
            return FieldNumberValue.ZERO;
        }
        if (fieldNumber <= 18) {
          return FieldNumberValue.UP_TO_18;
        }
        return FieldNumberValue.MORE_THAN_18;
    }

    /*
      Get pseudo random value from 0 up to 36 inclusive.
    */
    function getRolledValue() public view returns (uint256) {
        return
            uint256(
                keccak256(abi.encodePacked(block.difficulty, block.timestamp))
            ) % 37;
    }
}
