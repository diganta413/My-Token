pragma solidity >=0.4.22 <0.9.0;

contract Token{
  uint256 public _totalSupply;
  mapping(address => uint256) public _balances;
  string public _name;
  string public _symbol;

  event Transfer(
	  address  indexed _from,
	  address indexed  _to,
	  uint256 indexed _amount
  );
 
  constructor(uint256 initalSupply) public{
	  _name = "Digu's Token";
	  _symbol = "Digu";
	  _totalSupply = initalSupply;
	  _balances[msg.sender] = initalSupply;
  }

  function transfer(address to,uint256 amount) public returns (bool){
	  _transfer(msg.sender,to,amount);
	  return true;
  }

	function _transfer(address sender,address recipient,uint256 amount) public{
		require(sender != address(0),"Sent from zero account");
		require(recipient != address(0),"Transferd to a zero account");
		require(_balances[sender] >= amount,"Amount exceeds balance amount");
		_balances[sender] = _balances[sender]-amount;
		_balances[recipient] += amount;
	   emit Transfer(sender,recipient,amount);	
	}
}
