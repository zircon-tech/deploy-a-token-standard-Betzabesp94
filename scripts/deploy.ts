import { run, network } from "hardhat"
import { ethers } from "hardhat"

async function main() {
    const SimpleContractFactory = await ethers.getContractFactory("MyToken")
    console.log("Deploying contract...")
    const MyToken = await SimpleContractFactory.deploy(
        "MyToken",
        "MTK",
        [],
        ethers.utils.parseEther("10000"),
        "0x3099a9d5a86e16Cd363c2CD8867F5b3035f6F5D7"
    )
    await MyToken.deployed()
    console.log(`Deployed contract to: ${MyToken.address}`)
    if (network.config.chainId === 42 && process.env.ETHERSCAN_API_KEY) {
        await MyToken.deployTransaction.wait(8)
        await verify(MyToken.address, [
            "MyToken",
            "MTK",
            [],
            ethers.utils.parseEther("10000"),
            "0x3099a9d5a86e16Cd363c2CD8867F5b3035f6F5D7",
        ])
    }
    console.log(`Verified!!`)
}

const verify = async (contractAddress: string, args: any[]) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e: any) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!")
        } else {
            console.log(e)
        }
    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
