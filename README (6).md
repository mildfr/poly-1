
# ERC20 Goerli

The fxPortal contracts to transfer ERC20 tokens from the Goerli Ethereum testnet to the Mumbai Polygon (formerly Matic) testnet. The project seems to use ERC721 tokens to facilitate this task and includes several smart contract functions as well as scripts to achieve the desired result. 


## Steps:-

Certainly! Here's a step-by-step guide on how to run the project:

Install Dependencies:
Open your terminal and navigate to the project directory. Run the following command to install the required dependencies:

Copy code
npm install
Set Up Environment Variables:

Rename the .env.examples file to .env.
Open the .env file and replace YOUR_PRIVATE_KEY_HERE with your actual private key.
Deploy ERC721 Contract:
Deploy the ERC721 contract to the Goerli network using the following command:

arduino
Copy code
npx hardhat run scripts/deploy.js --network goerli
Take note of the deployed contract address.

Update Token Address:
In the other scripts, such as mint.js, approveDeposit.js, and getBalance.js, replace TOKEN_ADDRESS_HERE with the ERC721 contract address you obtained from the deployment step.

Mint Tokens:
Mint tokens to your wallet on the Goerli network by running:

arduino
Copy code
npx hardhat run scripts/mint.js --network goerli
Approve and Deposit Tokens to Polygon:
Approve and deposit your tokens to the Polygon network by running:

arduino
Copy code
npx hardhat run scripts/approveDeposit.js --network goerli
Wait for about 20-30 minutes for the tokens to show up on your Polygon account.

Check Polygon Balance:
Use a block explorer like polygonscan.com to check your Polygon account for the tokens. Click on the transaction related to the token arrival to get the contract address for the Polygon network.

Update Token Address Again:
In the getBalance.js script, replace TOKEN_ADDRESS_HERE with the contract address you obtained from the Polygon transaction.

Check Polygon Balance (Again):
Finally, run the following command to see your new Polygon balance:

arduino
Copy code
npx hardhat run scripts/getBalance.js --network mumbai
Remember that this guide assumes you have the necessary Ethereum and Polygon testnet configurations set up in your Hardhat project. Also, make sure to have the required ETH and MATIC tokens for transactions on the respective testnets. If you encounter any issues, refer to the documentation, verify your scripts, and ensure that your private key and network configurations are accurate.





## Steps:-

Certainly! Here's a step-by-step guide on how to run the project:

Install Dependencies:
Open your terminal and navigate to the project directory. Run the following command to install the required dependencies:

Copy code
npm install
Set Up Environment Variables:

Rename the .env.examples file to .env.
Open the .env file and replace YOUR_PRIVATE_KEY_HERE with your actual private key.
Deploy ERC721 Contract:
Deploy the ERC721 contract to the Goerli network using the following command:

arduino
Copy code
npx hardhat run scripts/deploy.js --network goerli
Take note of the deployed contract address.

Update Token Address:
In the other scripts, such as mint.js, approveDeposit.js, and getBalance.js, replace TOKEN_ADDRESS_HERE with the ERC721 contract address you obtained from the deployment step.

Mint Tokens:
Mint tokens to your wallet on the Goerli network by running:

arduino
Copy code
npx hardhat run scripts/mint.js --network goerli
Approve and Deposit Tokens to Polygon:
Approve and deposit your tokens to the Polygon network by running:

arduino
Copy code
npx hardhat run scripts/approveDeposit.js --network goerli
Wait for about 20-30 minutes for the tokens to show up on your Polygon account.

Check Polygon Balance:
Use a block explorer like polygonscan.com to check your Polygon account for the tokens. Click on the transaction related to the token arrival to get the contract address for the Polygon network.

Update Token Address Again:
In the getBalance.js script, replace TOKEN_ADDRESS_HERE with the contract address you obtained from the Polygon transaction.

Check Polygon Balance (Again):
Finally, run the following command to see your new Polygon balance:

arduino
Copy code
npx hardhat run scripts/getBalance.js --network mumbai
Remember that this guide assumes you have the necessary Ethereum and Polygon testnet configurations set up in your Hardhat project. Also, make sure to have the required ETH and MATIC tokens for transactions on the respective testnets. If you encounter any issues, refer to the documentation, verify your scripts, and ensure that your private key and network configurations are accurate.





## License

[MIT](https://choosealicense.com/licenses/mit/)


## Owner

This project belongs to Saurabh kumar

