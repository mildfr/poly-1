const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/FireNFT.sol/FireNFT.json");

const tokenAddress = "0xE50fa6d95F7e3a2Cf7C5829f49FC71C579b91A5a"; 
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0x2413Fbb98C2982Ada1744bb8289573D1107C423d"; 


async function main() {

    const myNFTContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);
    const transferFires = 3;

    for (let i = 0; i < transferFires; i++) {

      const FireID = await myNFTContract.tokenOfOwnerByIndex(walletAddress, i);
      // Approve the FxPortal Bridge to transfer the NFT on your behalf

      const approveTx = await myNFTContract.approve(fxERC721RootAddress, FireID);
      await approveTx.wait();
  
      console.log('Approval confirmed for Fire with FireID:', FireID.toString());
  
      // Deposit the NFT to the FxPortal Bridge
      const depositTx = await fxContract.deposit(
        tokenAddress,
        walletAddress,
        FireID,
        "0x6556"
      );
      await depositTx.wait();
  
      console.log("Fire with FireID:", FireID.toString(), "deposited to the FxPortal Bridge");
    }
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });