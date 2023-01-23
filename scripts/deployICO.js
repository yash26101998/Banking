const hre = require("hardhat");

async function main() {
  

  const ico = await hre.ethers.getContractFactory("ICO");
  const contract = await ico.deploy();

  

  console.log(
"address is",contract.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0xfB70Bb19f72B7a865DBC295883EE025F2b79E33A

//https://testnet.bscscan.com/address/0xfB70Bb19f72B7a865DBC295883EE025F2b79E33A#code
