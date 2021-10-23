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
}
)
