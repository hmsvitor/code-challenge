const Web3 = require("web3");
const swthAbi = require("./ABI/SWTH.json");

const provider = "https://bsc-dataseed1.binance.org:443";
const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));

const tokenAddress = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";
const walletAddress = [
  "0x123d475e13aa54a43a7421d94caa4459da021c77",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xfe808b079187cc460f47374580f5fb47c82b87a5",
];

const contract = new Web3Client.eth.Contract(swthAbi, tokenAddress);

async function getBalance(walletAddress: string) {
  const result = await contract.methods.balanceOf(walletAddress).call();
  const format = result / 100000000;

  console.log(`${walletAddress} ${Number(format.toFixed(8))}`);
}

walletAddress.forEach((address) => {
  getBalance(address);
});
