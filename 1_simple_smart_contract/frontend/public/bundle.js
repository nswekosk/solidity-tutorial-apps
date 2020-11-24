var contractABI = [];
var contractAddress = "0x71cd8598195abb5FC7AD56824D82c90242c5aFAE";
var web3 = new Web3("http://localhost:9345");
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts()
.then(console.log);