pragma solidity ^0.5.8;

contract Inbox {
    string public message;
    constructor(string memory initMessage) public {
            message = initMessage;
    }
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
    function getMessage() public returns(string memory){
        return message;
    }
}