//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./token.sol";

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract ICO {
    address public owner;
    Token public tokenCont;
    uint public amount;
    uint public tokenSold;
    uint public tokenPrice = 0.0001 ether * getPrice();

    constructor() {
        owner = msg.sender;
        tokenCont = Token(0x85314B49A5c2E9A08e0C7f8986d5FC39a7f9928A);
    }

    event Sell(address indexed _from, address indexed _to, uint _amount);

    function getPrice() public view returns (uint) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526
        );
        (, int256 answer, , , ) = priceFeed.latestRoundData();
        return uint(answer);
    }

    // function enterAmount(uint _amount) public payable{
    //     require((tokenCont.totalSupply()/100)*20<=tokenSold,"the presale has ended");
    //     require(msg.value>0 ether,"Please enter a non zero amount");
    //     payable(address(owner)).transfer(msg.value);

    // }

    // function chaeck() public payable returns(uint){
    //     amount=msg.value*getPrice()/tokenPrice;
    //     return amount;

    // }

    // function check() public payable returns(uint){

    //     tokenCont.transferFrom(owner,msg.sender,amount);
    //     emit Sell(owner,msg.sender,amount);
    //     return amount;

    // }

    function Buy() public payable returns (uint) {
        require(
            (tokenCont.totalSupply() * 60) / 100 >= tokenSold,
            "the presale has ended"
        );
        require(msg.value > 0 ether, "Please enter a non zero amount");
        amount = (msg.value * getPrice()) / tokenPrice;
        require(
            tokenCont.balanceOf(owner) >= amount,
            "Balance in token with owner is not enough"
        );
        tokenCont.approve(address(this), (tokenCont.totalSupply() * 60) / 100);
        tokenCont.transferFrom(owner, msg.sender, amount);

        emit Sell(owner, msg.sender, amount);
        tokenSold += amount;
        payable(owner).transfer(msg.value);
        return amount;
    }
}
//0xD7b774eF5d13D9e3A01c004eD0576F5a72FEbCab
