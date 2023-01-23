const hre = require("hardhat");

async function main() {
  

  const stake = await hre.ethers.getContractFactory("Stake");
  const contract = await stake.deploy();

  

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


//0x479EB5fdF66faCaC0FBB87416189fD99a4488946

//https://testnet.bscscan.com/address/0x479EB5fdF66faCaC0FBB87416189fD99a4488946#code
