const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/FireNFT.sol/FireNFT.json");

const tokenAddress = "0xE50fa6d95F7e3a2Cf7C5829f49FC71C579b91A5a"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x2413Fbb98C2982Ada1744bb8289573D1107C423d"; 

async function main() {

    const myContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const count = await myContract.balanceOf(walletAddress); // It will return number of NFTs in wallet

    for (let i = 0; i < count; i++) {
        const fireID = await myContract.tokenOfOwnerByIndex(walletAddress, i);
        const prompt = await myContract.promptDescription(fireID);
        console.log(`Fire with fireID ${fireID.toString()} has prompt: ${prompt}`);
      }

  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

