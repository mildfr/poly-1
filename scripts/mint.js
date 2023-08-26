const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/FireNFT.sol/FireNFT.json");
require('dotenv').config()

const tokenAddress = "0xE50fa6d95F7e3a2Cf7C5829f49FC71C579b91A5a"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x2413Fbb98C2982Ada1744bb8289573D1107C423d";   

async function main() {

    const fireData = [
      {
        cid: "QmWqfwaaNT9kj9TsXhxgWjCwmqPdLy51xYv4re1GD5C6KN",
        prompt: "board games",
      },
      {
        cid: "QmUrosUjXnHrHCG8SwEaPHofL8yuqZeBMVeikkz6GAw6HK",
        prompt: "sports game",
      },
      {
        cid: "QmX8Ff1LDzZLKCm8usTMFA48eesp3MQ24eDQ8F79c3TgSo",
        prompt: "rpg games",
      },
      {
        cid: "QmSA3wfcB48otnkmhgfoNKhLfCVvd5thH7yM6JHTCM42zd",
        prompt: "mobile games2",
      },
      {
        cid: "QmXwfXuqjrkrQpBnFTpdB58Hgd3jErg3KaVLrabeAyAePR",
        prompt: "mobile games",
      }
    ]

    const myContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    let fireID = 0;
    for(const {cid, prompt} of fireData){
      // Minting NFTs
      const tx = await myContract.mint(walletAddress, cid);
      await tx.wait();
      console.log("Fire minted with CID: ", cid);

      // Setting Prompts
      const setDescTx = await myContract.setDescription(fireID, prompt);
      await setDescTx.wait();

      console.log(`Prompt set for Fire with fireID ${fireID.toString()}!`);
      fireID++;
    }

  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });