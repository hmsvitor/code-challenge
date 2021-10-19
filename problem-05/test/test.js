const { ethers } = require("ethers");
const Utility = require("../build/contracts/Utility.json");

const ADDR =
  "0x46df6680ff22457a4f715721f8410778f3f8a17b7c9740ecdd8e6083eec20dd1"; // your contract address
const ABI = Utility.abi; // your contract ABI

const ADDRESS = "0x1F5Aa0BA66482D862abbCa6B7785D61EfaE43Ec8"; // some wallet address with token balance
const TOKENS = [
  // token contract addresses
  "0x3b0ffa3243ce8c0cb4ee3ebb79a10c0954cad2a357e68317663c40a8f41d9174",
  "0x5a9d26c385d2492133df6af6f346179a74961dc6941c270cb9d7dfe963c6d5f8",
];

const provider = ethers.providers.getDefaultProvider();

console.log("Testing...");

const test = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);

  return balances;
};

test().then(console.log);
