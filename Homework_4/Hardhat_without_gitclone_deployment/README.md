# Hardhat Project

```shell
npx hardhat node
npx hardhat run scripts/deploy.js
```
#eth_chainId
#eth_getTransactionByHash
#eth_accounts (2)
#eth_chainId
#eth_blockNumber
#eth_chainId (2)
#eth_estimateGas
#eth_getBlockByNumber
#eth_feeHistory
#eth_sendTransaction
  Contract deployment: Engine
  Contract address:    0xdc64a140aa3e981100a9beca4e685f962f0cf6c9
  Transaction:         0x7f43e5f81aa79bb41001896c6415f9783e158ffd13586c1a66b9a5a118fee2c9
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            86477 of 86477
  Block #5:            0x1c3e3fe306297028bdc0981a110619679f73db803049d90e932c78565509bb8a

#eth_chainId
#eth_getTransactionByHash
#eth_accounts
#eth_chainId
#eth_estimateGas
#eth_feeHistory
#eth_sendTransaction
  Contract deployment: Game
  Contract address:    0x5fc8d32690cc91d4c39d9d3abcbd16989f875707
  Transaction:         0xd924a1ba89bb72b6d4fde728953c3f7811ea1e7c2661db534572fafe4026d8dc
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            136837 of 136837
  Block #6:            0xc510d1305fe8058454fe580360891fedd410deab1a4f9fa81ceba8e9896f0c80

#eth_chainId
#eth_getTransactionByHash

########### Message:
Engine contract deployed to: 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
Game contract deployed to: 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
########### Contracts deployed successfully!

```shell
npx hardhat test
REPORT_GAS=true npx hardhat test
```
  0 passing (1ms)
  ·-----------------------|---------------------------|-------------|-----------------------------·
|  Solc version: 0.7.0  ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 30000000 gas  │
························|···························|·············|······························
|  Methods                                                                                      │
·············|··········|·············|·············|·············|·············|················
|  Contract  ·  Method  ·  Min        ·  Max        ·  Avg        ·  # calls    ·  usd (avg)    │
·------------|----------|-------------|-------------|-------------|-------------|---------------·

  0 passing (10ms)

