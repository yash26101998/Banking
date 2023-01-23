//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./token.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Stake {
    // uint public timeDuration;
    uint public stackTime;
    Token public contract20;
    address public owner;
    uint totalAmountStacked;

    constructor() {
        owner = msg.sender;
        contract20 = Token(0x85314B49A5c2E9A08e0C7f8986d5FC39a7f9928A);
    }

    struct depositor {
        uint timeDuration;
        uint amount;
    }

    event Transfer(address indexed _from, address indexed to, uint value);

    mapping(address => depositor) public depositors;

    // depositor public d;

    function amountStacked(uint _timeDuration, uint _amt) public {
        depositors[msg.sender].timeDuration = _timeDuration;
        stackTime = block.timestamp;
        require(
            totalAmountStacked <= (contract20.totalSupply() * 30) / 100,
            "No more amount can be stacked"
        );
        require(_amt > 0, "please provide a non zero amount");
        require(
            contract20.balanceOf(msg.sender) >= _amt,
            "you dont have sufficent coin balance"
        );
        contract20.transferFrom(msg.sender, owner, _amt);
        contract20.approve(
            address(this),
            (contract20.totalSupply() * 30) / 100
        );
        emit Transfer(msg.sender, owner, _amt);
        depositors[msg.sender].amount += _amt;
    }

    function withdraw() public {
        uint timePassed = block.timestamp - stackTime;
        require(
            timePassed >= depositors[msg.sender].timeDuration,
            "cannot withdraw right now"
        );
        uint interest = (1 *
            depositors[msg.sender].amount *
            depositors[msg.sender].timeDuration) / 100;
        uint totalAmount = depositors[msg.sender].amount + interest;
        require(totalAmount > 0);
        require(contract20.balanceOf(owner) >= totalAmount);
        contract20.transferFrom(owner, msg.sender, totalAmount);
        emit Transfer(owner, msg.sender, totalAmount);
    }
}
