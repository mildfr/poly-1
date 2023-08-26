// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/FireNFT.sol/FireNFT.json");

const tokenAddress = "0xBA16228AC27a48282B030324042F9afF74Ced20c"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x2413Fbb98C2982Ada1744bb8289573D1107C423d"; // place your public address for your wallet here

async function main() {

  const myContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const count = await myContract.balanceOf(walletAddress); // It will return number of NFTs in wallet

  console.log("You now have: " + count.toString() + " Fires in your Wallet!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});