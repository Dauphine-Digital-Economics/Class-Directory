# I. Hardhat Deployments 

## Hardhat Project deploying from scratch 

***You will find out the full project on the <u> separate branch Homework_4 <u> within the forked Dauphine-Digital-Economics.***
  
https://github.com/aizhan-zhak/Dauphine-Digital-Economics/tree/Homework_4/Hardhat_without_gitclone_deployment
  
**Comment:** I could manage to push it only to the separate branch, which I named the same as the current folder 
  

#### Installation using VS code terminal
```shell
cd /Users/aizhana/Desktop/npm
node -v
npm -v
npm install --save-dev hardhat
npx hardhat
```

```shell
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```
```
# Compiled 2 Solidity files successfully 
  Contract deployment: Engine
  Contract address:    0xdc64a140aa3e981100a9beca4e685f962f0cf6c9
  Transaction:         0x7f43e5f81aa79bb41001896c6415f9783e158ffd13586c1a66b9a5a118fee2c9
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            86477 of 86477
  Block #5:            0x1c3e3fe306297028bdc0981a110619679f73db803049d90e932c78565509bb8a
```
  
```
  Contract deployment: Game
  Contract address:    0x5fc8d32690cc91d4c39d9d3abcbd16989f875707
  Transaction:         0xd924a1ba89bb72b6d4fde728953c3f7811ea1e7c2661db534572fafe4026d8dc
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            136837 of 136837
  Block #6:            0xc510d1305fe8058454fe580360891fedd410deab1a4f9fa81ceba8e9896f0c80
```
  
**Message:**
  
Engine contract deployed to: 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
  
Game contract deployed to: 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
  
**Contracts deployed successfully!**
  

### 1. Challenge 1 - Test and Deploy (gitcloned to the VS code)
***The link to the gitcloned and extended with tests using chai package: https://github.com/aizhan-zhak/Hardhat-Gambling.git***
  
**Comment:** Since I have the same contracts as in the Hardhat-Gambling example, I decided to work directly on tests. The one difference that I noticed was the version of pragma, which I  set it identical in the configuration for the previous deployment, where I was trying to deploy it myself from scratch. Here, I decided to keep it same since it would have just required me to change the version in the hardhat.config.js.
  
**Terminal commands:**
```shell 
npx hardhat run scripts/deploy.js --network localhost
```
```
Downloading compiler 0.8.17
Compiled 2 Solidity files successfully
Contract Deployed at 0x0165878A594ca255338adfa4d48449f69242Eb8F
```


```shell 
MacBook-Air-Aizhan:Hardhat-Gambling aizhana$ npx hardhat test
```
```
  Engine
    bitwiseAnd
      ✔ should return 0 when both inputs are 0
      ✔ should return the bitwise AND of two numbers
```
```
  Game contract
    ✔ should return true if the user guess is correct
    ✔ should return false if the user guess is incorrect
  4 passing (3s)
```
  
****Committing and pushing to the forked Hardhat-Gambling:****
  
```shell 
(base) MacBook-Air-Aizhan:Hardhat-Gambling aizhana$ git commit -m "Add new test files and compilation report, update package-lock and package.json. This commit adds new test files for the game, engine and the game contract, along with a report on the Solidity compilation process. The package-lock and package.json files were also updated to reflect these changes"

  
[main 2d26144] Add new test files and compilation report, update package-lock and package.json. This commit adds new test files for the game, engine and the game contract, along with a report on the Solidity compilation process. The package-lock and package.json files were also updated to reflect these changes
 6 files changed, 153 insertions(+), 390 deletions(-)
 create mode 100644 test/compilation.md
 create mode 100644 test/test_engine.test.js
 create mode 100644 test/test_game.test.js
```

```shell 
(base) MacBook-Air-Aizhan:Hardhat-Gambling aizhana$ git push
warning: redirecting to https://github.com/aizhan-zhak/Hardhat-Gambling/
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 2 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (10/10), 5.26 KiB | 449.00 KiB/s, done.
Total 10 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To http://github.com/aizhan-zhak/Hardhat-Gambling
   61ed3d2..2d26144  main -> main
```

### 2. Challenge 2 - Celo Alfajores Deployment
```shell 
npm install dotenv
npx hardhat run scripts/deploy.js --network alfajores
```  
Contract Deployed at 0xe6317492C8a532992019394FE3C827C564169Fe5

```shell 
git add .
git commit -m "Deploying contracts using alfajores network"

[main 757d66a] Deploying contracts using alfajores network
 5 files changed, 65 insertions(+), 2 deletions(-)
```
```shell 
git push

warning: redirecting to https://github.com/aizhan-zhak/Hardhat-Gambling/
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 2 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 2.01 KiB | 2.01 MiB/s, done.
Total 8 (delta 4), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To http://github.com/aizhan-zhak/Hardhat-Gambling
   2d26144..757d66a  main -> main
```
The .env file is ignored as expected.

**The link to the alfajores deployment is here: https://github.com/aizhan-zhak/Hardhat-Gambling.git**

Following several requests for some CELO testnet funds, I've got 5.1 CELO on my MetaMask. 
Right after the deployment, I left with 5.0941 CELO, which I found to be the gas price that I have paid for the transaction associated with the contract creation. 
  
``` shell
 node receipt.js
```
The receipt.js was pushed and can be found with the following git commit -m "Receipt and gas for alfajores deployment".
```
{
  to: null,
  from: '0x79f6B6063f9Abf7B6fFCb6FAC48496AF07764bb1',
  contractAddress: '0xe6317492C8a532992019394FE3C827C564169Fe5',
  transactionIndex: 1,
  gasUsed: BigNumber { _hex: '0x039c26', _isBigNumber: true },
  blockHash: '0x24f7e646b1f49624e09b53073dd2caf98949ba3bb64bfcbddaee4023135ce063',
  transactionHash: '0x75f8a6f7e78b1d35c975bedeb014b8529d443d777a8a08ae346f3288298870dc',
  blockNumber: 16787230,
  confirmations: 1356,
  cumulativeGasUsed: BigNumber { _hex: '0x056111', _isBigNumber: true },
  effectiveGasPrice: BigNumber { _hex: '0x05d21dba00', _isBigNumber: true },
  status: 1,
  type: 0,
  byzantium: true
}
Gas used: 236582
Gas price: 25000000000
Transaction cost: 0.00591455 CELO
```

External validity of the transaction attributes can be found here 
  https://explorer.bitquery.io/celo_alfajores/tx/0x75f8a6f7e78b1d35c975bedeb014b8529d443d777a8a08ae346f3288298870dc
 ```
Transaction Attributes
Attribute	Value
Block	16787230
Timestamp	2023-03-20 09:37:39
Sender	0x79f6b6063f9abf7b6ffcb6fac48496af07764bb1
Receiver	0x
Created	0xe6317492c8a532992019394fe3c827c564169fe5
Amount	0 cGLD 
Gas Cost	0.005914550071197696 cGLD
  Avg. Gas Price, GWei	2.4999999488000002e-8 GWei
Gas Used	236582
Success?	true
```
**Comments:** The cost of the transaction, which is 0.00591455 CELO, was calculated based on the amount of gas used, which was 236582, and the gas price, which was approximately 2.5e-8. Gas is the fee that users pay to execute transactions on the blockchain network. It is used to compensate miners who validate and process the transaction. The amount of gas used is a measure of the computational resources required to execute the transaction. The gas price represents the amount of CELO paid per unit of gas used. The product of these two values determines the total cost of the transaction. Therefore, a higher gas price or a larger amount of gas used will result in a higher transaction cost.The gas mechanism serves as an important security feature on the blockchain network, preventing malicious actors from spamming the network with unnecessary transactions. Additionally, it ensures that resources are allocated efficiently, preventing the network from becoming overloaded and slowing down transaction processing times.
  
It is possible to evaluate the efficiency of the transaction in terms of gas usage. In my case, the transaction used a total of 236582 gas at a gas price of 2.5e-8 wei per gas unit, resulting in a transaction cost of 0.00591455 CELO. To determine whether this transaction was efficient or not, I need to compare it with similar transactions on the same network with my classmates. I compared with one of my classmates, who had a gas fee associated to the deployment of 0.0002 CELO less than what I paid as a cost. If others' transactions for similar functions on the same network require significantly less gas, then this transaction might be considered inefficient.
  
# II. Impact Market DAO proposal
  
 ### Title: PACT Donation Matching Program and PACT Reward System to Encourage Donations

**Overview:**
impactMarket is a platform that enables individuals and communities to contribute to social impact projects around the world. PACT is impactMarket's native token that is used to reward donors, support UBI communities, and incentivize investors. While impactMarket has seen tremendous growth and success, there is still an opportunity to increase the utility and value of the PACT token. This proposal focuses on incentivizing donors to increase their donations and use their PACT tokens in a way that benefits impactMarket and the communities it serves.

**Short description of the proposal:** This proposal aims to incentivize PACT donors to increase their donations by introducing ***(1) a donation matching program***. The program will match a portion of the donation made by the donor with PACT tokens, providing them with an opportunity to earn more PACT while supporting impactMarket's mission. At the same time, this proposal seeks to establish ***(2) a reward system for PACT token holders*** who donate to impactMarket, also encouraging increased donations and interaction with the DAO. By providing rewards and benefits to donors, we can create a sustainable and impactful community that supports impactMarket's mission.

### The scope.
  
#### Background:
impactMarket is a Web3 platform dedicated to creating economic opportunities for underprivileged communities through the use of DeFi. The platform's goal is to leverage blockchain technology to provide access to financial services that would otherwise be unavailable to people living in poverty. 
 
It relies heavily on its community to support its initiatives. PACT token holders play a crucial role in the success of the DAO, as they are the backbone of its funding and growth. One of the primary ways that impactMarket raises funds for their projects is through donations. impactMarket uses a portion of these funds to purchase PACT tokens, which are then distributed to donors as a reward for their contributions. This incentivizes donors to continue supporting impactMarket's mission and also provides a tangible benefit for their support. 

To encourage PACT donors to increase their contributions, I propose the implementation of a **donation matching program**. In addition, there is currently no formal reward system in place for PACT token holders beyond receiving the tokens themselves. This proposal also seeks to address this by establishing a **reward system** that will encourage PACT holders to interact with the impactMarket DAO.

Donors play a crucial role in supporting impactMarket's mission. Through their contributions, they help fund social impact projects and provide critical support to UBI communities. However, many donors may not fully understand the potential impact of their donations or how they can use their PACT tokens to make a difference. This proposal aims to provide clear incentives and benefits to donors that encourage them to increase their donations and use their PACT tokens in a way that creates value for all stakeholders.

#### Mechanism:
To incentivize donors to increase their donations and use their PACT tokens, the following mechanisms are proposed:

***1. Matching program.*** The donation matching program will match a portion of the donation made by the donor with PACT tokens. The exact matching rate will be determined by the DAO and can be adjusted periodically based on the availability of funds and the impact of the program. For example, if the matching rate is set at 50%, a donor who contributes 100 PACT will receive an additional 50 PACT as a reward.

***2. Reward system***, which will be a system with increasing rewards and benefits for higher levels of engagement.
  The proposed reward system will be structured as follows:
  
  - **Donations:** Donors who contribute a certain amount of funds to impactMarket will be rewarded with a set number of PACT tokens. The more they donate, the more tokens they will receive. This will incentivize donors to increase their contributions and also increase the amount of PACT tokens in circulation.
  - **Participation:** PACT token holders who actively participate in impactMarket's DAO will also be eligible for rewards. This can include activities such as voting on proposals, contributing to discussions, and volunteering time to help with impactMarket projects. The more active a PACT holder is within the DAO, the more rewards they will receive.
  - **Top leaders in the Leaders Board:** The board will track the impact of each donor's contributions. By showing donors how their donations are making a difference, it can also create a sense of competition and motivation that encourages them to contribute more.
  - **Referrals:** PACT holders who refer new donors to impactMarket will also be eligible for rewards. This will encourage PACT holders to spread the word about impactMarket's mission and increase the platform's reach.
  - **PACT Token Burn:** This could be a mechanism where donors can burn their PACT tokens to support social impact projects directly. By allowing donors to contribute their PACT tokens in this way, it can create a sense of ownership and engagement that encourages them to contribute more.
  - **UBI Community Engagement:** This will create opportunities for donors to engage directly with UBI communities and see the impact of their donations first-hand. By creating a sense of connection (could be considered rewarding) and empathy, it can motivate donors to increase their contributions and use their PACT tokens in a way that supports the needs of these communities.

#### Metrics or Key Performance Indicators:
The success of the donation matching program will be measured by the following metrics:
  - Total amount of PACT donated during the program period;
  - Total amount of PACT matched through the program;
  - Number of unique donors who participated in the program;
  - Feedback and engagement from the impactMarket community.

Similarly, to measure the success of the proposed reward system, we can track the following metrics:
  - Total amount of donations received; 
  - Number of PACT tokens in circulation: This will help us understand the impact of the reward system on the supply of PACT tokens
  - Number of active PACT holders within the DAO: This will help us understand how effective the reward system is at encouraging participation.
  - Number of referrals generated by PACT holders: This will help us understand the impact of the reward system on increasing impactMarket's reach.
  
By tracking the total amount of donations received, we can gain insights into how effective the matching and reward systems are at incentivizing donations. This is simply tracking the total amount of donations received over a given period and compare it to previous periods. The number of active PACT holders within the DAO will help us understand how effective the reward system is at encouraging participation. The number of referrals generated by PACT holders will help to understand the impact of the reward system on increasing impactMarket's reach.

In addition, it is also possible to track the token velocity, which refers to the rate at which PACT tokens are being used and exchanged within the impactMarket community. By increasing token velocity, we can create a more vibrant and active ecosystem that benefits all stakeholders. In a similar way, it would be an asset to track donor engagement, which would include the number of donors who participate in the rewards program, burn their PACT tokens, or engage with UBI communities. By understanding donor engagement, we can fine-tune the programs and ensure that they are meeting the needs and expectations of the donors.

#### Financial Implications:
**The donation matching program** will require a budget allocation from impactMarket to fund the matching component of the program. The exact amount of funding required will depend on the matching. 

  First of all, the donation matching program can incentivize more PACT donations by offering a reward for contributions. This could lead to an increase in demand for PACT tokens, which could drive up the token's price in the market. As more people see the value in supporting impactMarket's mission, there could also be an increase in the number of PACT token holders, which would further increase demand. Moreover, the reward system can create a self-sustaining ecosystem where PACT holders are incentivized to actively participate in impactMarket's DAO, donate, and engage with UBI communities. This could lead to a loyal and engaged community, which could attract more investors and donors to support impactMarket's initiatives.

**The proposed reward system**, which includes donations, participation, top leaders in the leaderboard, referrals, PACT token burn, and UBI community engagement, can also have significant financial implications. It will require an initial investment to set up, but with the expectatoin that the increased donations and participation will offset these costs over time. Then there would be a need to allocate a portion of impactMarket's budget to fund the rewards program, but I believe that the benefits of increased engagement and participation will far outweigh the costs. By providing incentives for donations and engagement, more funds can be raised for social impact projects and UBI communities, which can lead to more economic opportunities and financial inclusion. 
  
  In addition, by tracking the impact of each donor's contributions and creating a sense of competition among donors, there could be a positive effect on the platform's growth and popularity. If more people are aware of impactMarket and its mission, it could lead to more investors and donors joining the platform, resulting in a significant increase in the demand for PACT tokens. The proposed PACT token burn mechanism can also have a positive impact on the platform's finances. By allowing donors to contribute their PACT tokens directly to social impact projects, it could create a sense of ownership and engagement that encourages them to contribute more. The burning of PACT tokens could reduce the circulating supply, creating scarcity, and potentially driving up the price of the token.
 

**Overall,** present proposal to introduce a donation matching program and reward system for PACT token holders is a step towards creating a sustainable and impactful community that supports impactMarket's mission. This proposal aims to incentivize PACT donors to increase their donations and use their PACT tokens in a way that benefits both impactMarket and the communities it serves. For impactMarket, the program will increase the funding available to support its initiatives, while also creating a sense of community and engagement among its members. For PACT donors, the program provides an opportunity to earn more PACT while supporting a cause they believe in. The mechanisms related to the donation matching program and reward system will provide clear incentives and benefits that encourage donors to increase their contributions and create a sense of connection with UBI communities. The reward system will incentivize donors to contribute more funds to impactMarket, encourage active participation in the DAO, and increase the platform's reach through referrals. By establishing a formal reward system for PACT token holders, impactMarket can increase engagement with its community and further its mission to provide economic opportunities to underprivileged communities through DeFi. I believe this proposal provides a unique and impactful way for individuals and communities to contribute to social impact projects around the world.
