# I. Hardhat Deployments 

## Hardhat Project deploying from scratch 

***You will find out the full project on the <u> separate branch Homework_4 <u> within the forked Dauphine-Digital-Economics.***
Note: I could manage to push it only to the separate branch, which I named the same as the current folder (Homework_4/Hardhat_without_gitclone_deployment)

  
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

Terminal commands:
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
```

[main 757d66a] Deploying contracts using alfajores network
 5 files changed, 65 insertions(+), 2 deletions(-)
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

**The link to the gitcloned and extended with tests using chai package: https://github.com/aizhan-zhak/Hardhat-Gambling.git**

# II. Impact Market DAO proposal

## Title: Creating a PACT Reward System to Encourage Donations

Short description: This proposal seeks to establish a reward system for PACT token holders who donate to impactMarket, encouraging increased donations and interaction with the DAO.

### The scope

#### Background:
impactMarket is a Web3 platform dedicated to creating economic opportunities for underprivileged communities through the use of decentralized finance (DeFi). The platform's goal is to leverage blockchain technology to provide access to financial services that would otherwise be unavailable to people living in poverty.

One of the primary ways that impactMarket raises funds for their projects is through donations. impactMarket uses a portion of these funds to purchase PACT tokens, which are then distributed to donors as a reward for their contributions. This incentivizes donors to continue supporting impactMarket's mission and also provides a tangible benefit for their support.

However, there is currently no formal reward system in place for PACT token holders beyond receiving the tokens themselves. This proposal seeks to address this by establishing a reward system that will encourage PACT holders to interact with the impactMarket DAO.

#### Proposal:
The proposed reward system will be structured as follows:

Donations: Donors who contribute a certain amount of funds to impactMarket will be rewarded with a set number of PACT tokens. The more they donate, the more tokens they will receive. This will incentivize donors to increase their contributions and also increase the amount of PACT tokens in circulation.

Participation: PACT token holders who actively participate in impactMarket's DAO will also be eligible for rewards. This can include activities such as voting on proposals, contributing to discussions, and volunteering time to help with impactMarket projects. The more active a PACT holder is within the DAO, the more rewards they will receive.

Referrals: PACT holders who refer new donors to impactMarket will also be eligible for rewards. This will encourage PACT holders to spread the word about impactMarket's mission and increase the platform's reach.

#### Metrics or Key Performance Indicators:

To measure the success of the proposed reward system, we will track the following metrics:

Total amount of donations received: This will give us a clear picture of how effective the reward system is at incentivizing donations.
Number of PACT tokens in circulation: This will help us understand the impact of the reward system on the supply of PACT tokens.
Number of active PACT holders within the DAO: This will help us understand how effective the reward system is at encouraging participation.
Number of referrals generated by PACT holders: This will help us understand the impact of the reward system on increasing impactMarket's reach.
Financial Implications:

The proposed reward system will require an initial investment to set up, but we expect that the increased donations and participation will offset these costs over time. We will need to allocate a portion of impactMarket's budget to fund the rewards program, but we believe that the benefits of increased engagement and participation will far outweigh the costs.

Conclusion:

The proposed PACT reward system will incentivize donors to contribute more funds to impactMarket, encourage active participation in the DAO, and increase the platform's reach through referrals. By establishing a formal reward system for PACT token holders, impactMarket can increase engagement with its community and further its mission to provide economic opportunities to underprivileged communities through DeFi.
