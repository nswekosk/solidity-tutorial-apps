var contractABI = [{
    "constant": true,
    "inputs": [],
    "name": "hello",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }];
var contractAddress = "0x772E5DCf926514671FeA3c989264630797E1f0aF";

var web3 = new Web3("http://localhost:9545");
var helloWorldContract = new web3.eth.Contract(contractABI, contractAddress);


console.log(helloWorldContract);

document.addEventListener('DOMContentLoaded', () => {
    try {
        helloWorldContract.methods.hello().call().then(result => {
            document.getElementById("hello").innerHTML = result;
        });
    }catch (error){
        debugger
        console.log(error);
    }
    
})