# Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project aim is to interact with an ERC20 Token and perform the following: 

- To fork mainnet 
- Inetract with an ERC-20 Token and get the balance
- Perfom an account impersonation with an address that has interacted with the contract 
- Grant the address to sign transactions 
- Access the mapping that house the balances of each address 
- Get the location of mapping in storage

Try running some of the following tasks:

```shell
yarn hardhat accounts
yarn hardhat compile
yarn hardhat clean
yarn hardhat test
yarn hardhat node
yarn hardhat help
REPORT_GAS=true yarn hardhat test
yarn hardhat coverage
yarn hardhat run scripts/deploy.ts
TS_NODE_FILES=true yarn ts-node scripts/deploy.ts
yarn eslint '**/*.{js,ts}'
yarn eslint '**/*.{js,ts}' --fix
yarn prettier '**/*.{json,sol,md}' --check
yarn prettier '**/*.{json,sol,md}' --write
yarn solhint 'contracts/**/*.sol'
yarn solhint 'contracts/**/*.sol' --fix
```

## Environment Variables 
check `.env.example`
- `POLYGON_RPC_URL`
- `PRIVATE_KEY`
- `CONTRACT_ADDRESS`
-  `OWNER_ADDRESS` - 