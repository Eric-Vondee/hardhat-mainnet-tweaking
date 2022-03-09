import { BigNumber, BigNumberish, Signer } from "ethers";
import { ethers } from "hardhat";
import {CONTRACT_ADDRESS, OWNER_ADDRESS} from '../config/index'

async function script() {
    const contractAddress:string = CONTRACT_ADDRESS;
    const ownerAddress:string =  OWNER_ADDRESS;

    //Get properties of the token
    const fetchToken = await ethers.getContractAt("IERC20", contractAddress);
    let tokenBalance = await fetchToken.balanceOf(contractAddress);

    console.log(tokenBalance);

    //account impersonation 
    //@ts-ignore
    await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [ownerAddress]
    })

    //granting owner address the ability to sign transactions 
     let accountSigner: Signer = await ethers.getSigner(ownerAddress);
     await fetchToken.connect(accountSigner).transfer(ownerAddress, "1000000000000000000000000000000000000000");

    //encoding arguments address and uint256 to access the mapping in storage
    const mappingData = new ethers.utils.AbiCoder().encode(["address", "uint256"], [ownerAddress, 0])
    const position = ethers.utils.solidityKeccak256(["bytes"], [mappingData]);

    //conerting from bytes to decimals
    const number:BigNumberish = BigNumber.from(position);

    //to get position 
    const data = await ethers.provider.getStorageAt(fetchToken.address, number);
    console.log(`balance: ${data}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});