pragma solidity >=0.4.22 <0.9.0;

contract Token{
  uint256 public totalSupply;
  mapping(address => uint256) public balances;
  mapping(address => mapping(address => uint256)) public allowance;
  string public name;
  string public symbol;

  event Transfer(
	  address  indexed from,
	  address indexed  to,
	  uint256 indexed amount
  );

  event Approval(
	  address indexed owner,
	  address indexed _spender,
	  uint256 indexed _value
  );
 
  constructor(uint256 initalSupply) public{
	  name = "Digu's Token";
	  symbol = "Digu";
	  totalSupply = initalSupply;
	  balances[msg.sender] = initalSupply;
  }

  function transfer(address to,uint256 amount) public returns (bool success){
		require(msg.sender != address(0),"Sent from zero account");
		require(to != address(0),"Transferd to a zero account");
		require(balances[msg.sender] >= amount,"Amount exceeds balance amount");
		balances[msg.sender] = balances[msg.sender]-amount;
		balances[to] += amount;
	   emit Transfer(msg.sender,to,amount);	
	  return true;
  }

  function approve(address _spender,uint256 _value) public returns(bool success) {
		require(msg.sender != address(0),"Approved from a zero account");
		require(_spender != address(0),"spent from a zero address");
		allowance[msg.sender][_spender] = _value;
		emit Approval(msg.sender,_spender,_value);
		return true;
  }

	function transferFrom(address _spender,address _to,uint256 _value) public returns(bool success) {
		require(_value <= balances[_spender]);
		require(_value <= allowance[msg.sender][_spender]);
		balances[_spender] = balances[_spender]-_value;
		balances[_to] = balances[_to]+_value;
		allowance[msg.sender][_spender] = allowance[msg.sender][_spender] - _value;
		emit Transfer(_spender,_to,_value);
		return true;
	}
}
