const Token = artifacts.require("../contracts/Token.sol");

contract("Token", function(accounts){
	it("sets the total amount on deployment",async  function() {
		const instance = await Token.deployed();
		const totalSupply = await instance.totalSupply();
		assert.equal(totalSupply,100000,"100000 tokens is not stored");
	})

	it("name and symbol set correctly",async function() {
		const instance = await Token.deployed();
		const name = await instance.name();
		const symbol = await instance.symbol();
		assert.equal(name,"Digu's Token","Name is not set correctly");
		assert.equal(symbol,"Digu",symbol);
	})
		
	it("checks the balances correctly",async function() {
		const instance = await Token.deployed();
		const success = await instance.transfer(accounts[1],100,{from: accounts[0]});
		const balance = await instance.balances(accounts[1]);
		assert.equal(balance,100,"Balances is not checked correctly");
	})

	it("approves a account correctly",async function() {
		const instance = await Token.deployed();
		const approval = await instance.approve(accounts[1],50,{from: accounts[0]});
		assert(approval.logs[0].args.owner,accounts[0],"Not approved from the correct account");
		assert(approval.logs[0].args._spender,accounts[1], "Not spent from correct account");
		assert(approval.logs[0].args._value,50, "Correct amount not spent");
		const all = await instance.allowance(accounts[0],accounts[1]);
		assert(all,50,"Allowance is not set correctly");
	})

	it("transferFrom triggered correctly", async function(){
		const instance = await Token.deployed();
		const transferFrom = await instance.transferFrom(accounts[1],accounts[2],20,{from: accounts[0]});
		const sender_balance = await instance.balances(accounts[1]);
		const receipient = await instance.balances(accounts[2]);
		assert.equal(sender_balance.toNumber(),80,"Sender balance not deducted correctly");
		assert.equal(receipient.toNumber(),20,"Recipient balance not deducted correctly");
	})

}
)
