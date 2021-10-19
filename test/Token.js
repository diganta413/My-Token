const Token = artifacts.require("../contracts/Token.sol");

contract("Token", function(accounts){
	it("sets the total amount on deployment",async  function() {
		const instance = await Token.deployed();
		const totalSupply = await instance.totalSupply();
		assert.equal(totalSupply,10000,"10000 tokens is not stored");
	})
}
)
