const Token = artifacts.require("../contracts/Token.sol");

contract("Token", function(accounts){
	it("sets the total amount on deployment",async  function() {
		const instance = await Token.deployed();
		const totalSupply = await instance._totalSupply();
		assert.equal(totalSupply,100000,"100000 tokens is not stored");
	})

	it("name and symbol set correctly",async function() {
		const instance = await Token.deployed();
		const name = await instance._name();
		const symbol = await instance._symbol();
		assert.equal(name,"Digu's Token","Name is not set correctly");
		assert.equal(symbol,"Digu",symbol);
	})
		
	it("checks the balances correctly",async function() {
		const instance = await Token.deployed();
		const success = await instance.transfer(accounts[1],100,{from: accounts[0]});
		console.log(success);
		const balance = await instance._balances(accounts[1]);
		assert.equal(balance,100,"Balances is not checked correctly");
	})

}
)
