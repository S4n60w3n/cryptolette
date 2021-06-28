// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract Balance {
    receive() external payable {}

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getPercentage(uint _number, uint _percentage) public pure returns (uint) {
        return (_number * _percentage) / 100;
    }

    function getWithdrawableAmount() public view returns (uint) {
        return getPercentage(getBalance(), 80);
    }

    function sendMoney(address payable _to, uint _amount) internal {
        require(_amount <= getWithdrawableAmount(), "Not enought money in the contract");
        _to.transfer(_amount);
    }
}
