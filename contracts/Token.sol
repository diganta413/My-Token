pragma solidity >=0.4.22 <0.9.0;

contract Token{
  uint256 public _totalSupply;
  mapping(address => uint256) public _balances;
  string public _name;
  string public _symbol;

  constructor(uint256 initalSupply) public{
	  _name = "Digu's Token";
	  _symbol = "Digu";
	  _totalSupply = initalSupply;
	  _balances[msg.sender] = initalSupply;
  }  

}
