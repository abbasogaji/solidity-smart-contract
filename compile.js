const path = require('path');
const fs = require('fs');
const solidity = require('solc');
const contractName = "inbox.sol";

const contractPath = path.join(__dirname, "contracts", "inbox.sol")
contract = fs.readFileSync(contractPath, 'UTF-8');
var input = {
    language: 'Solidity',
    sources: {
      [contractName]: {
        content: contract
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  }



sourceCode = solidity.compile(JSON.stringify(input))

// console.log(JSON.parse(sourceCode).contracts['inbox.sol'].Inbox.evm.bytecode)
// console.log(JSON.parse(sourceCode).contracts['inbox.sol'].Inbox.abi)

module.exports = JSON.parse(sourceCode).contracts['inbox.sol'].Inbox;
