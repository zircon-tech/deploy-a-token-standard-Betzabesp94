import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-ethers"
import "dotenv/config"
import { HardhatUserConfig } from "hardhat/config"

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL!
const PRIVATE_KEY = process.env.PRIVATE_KEY!
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
        },
        kovan: {
            url: KOVAN_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 42,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.13",
            },
        ],
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
}

export default config
