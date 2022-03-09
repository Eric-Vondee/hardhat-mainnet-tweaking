# Hardhat - Mainnet Forking & Account Impersonation

This project demonstrates an advanced use of Hardhat. 
We want to be able to perform the following actions.

- To fork the mainnet .
- Interact with an ERC-20 Token and get the balance.
- Perfom an account impersonation with an address that has interacted with the contract. 
- Grant the address access to sign transactions.
- Access the mapping that hold the balances of each address.
- Get the location of the mapping in storage.

## Try running some of the following tasks:
yarn hardhat compile
yarn hardhat run scripts/deploy.ts

## Environment Variables 
check `.env.example`
- `POLYGON_RPC_URL`
- `PRIVATE_KEY`
- `CONTRACT_ADDRESS`
-  `OWNER_ADDRESS` - 