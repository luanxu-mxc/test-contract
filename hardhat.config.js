require("./tasks/claimRIDE.js");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    wannsee: {
      saveDeployments: true,
      chainId: 5167003,
      url: "https://wannsee-rpc.mxc.com",
    }
  }
}
