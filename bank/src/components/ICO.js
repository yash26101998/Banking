import './ICO.css'
import {useState} from "react";
// const {icoAbi}=require('C:/Users/yashaditya wadhwa/Desktop/proj/Banking/bank/src/components/ICO.js');

const{ethers}=require("ethers");


function ICO() {
        
    const[text,setText]=useState(0);
    const[amt,setamt]=useState(0);
    const[dur,setdur]=useState(0);
    const[wall,setWall]=useState(0);
   const connectWallet=async()=>{
        // Update the document title using the browser API
        const provider=new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts",[]);
      }
    
   


    const writeICO = async()=>{
        const icoAbi=[
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
                }
              ],
              "name": "Sell",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "Buy",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "amount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getPrice",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenCont",
              "outputs": [
                {
                  "internalType": "contract Token",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenPrice",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenSold",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ];
          
        const provider=new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts",[]);
        const signer=provider.signer();
        

        const icocontractAdress="0xfB70Bb19f72B7a865DBC295883EE025F2b79E33A";
        

        

        const contractIco=new ethers.Contract(icocontractAdress,icoAbi,signer);

        await contractIco.buy({value:ethers.utils.parseEther(setText)});


    }

    const writeamtStaked=async()=>{
        const stakeAbi=[
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_timeDuration",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "_amt",
                  "type": "uint256"
                }
              ],
              "name": "amountStacked",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "contract20",
              "outputs": [
                {
                  "internalType": "contract Token",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "depositors",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "timeDuration",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "stackTime",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ];
        

        const stakecontractAdress="0x479EB5fdF66faCaC0FBB87416189fD99a4488946";
        const provider=new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts",[]);

        const icosigner=provider.getSigner();

        const contract=new ethers.Contract(stakecontractAdress,stakeAbi,icosigner);
        await contract.amountStacked({amt},{dur});
}

const writeWithdraw=async()=>{
    const stakeAbi=[
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_timeDuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_amt",
              "type": "uint256"
            }
          ],
          "name": "amountStacked",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "contract20",
          "outputs": [
            {
              "internalType": "contract Token",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "depositors",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "timeDuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "stackTime",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "withdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];
    

    const stakecontractAdress="0x479EB5fdF66faCaC0FBB87416189fD99a4488946";
    const provider=new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts",[]);

    const icosigner=provider.getSigner();

    const contract=new ethers.Contract(stakecontractAdress,stakeAbi,icosigner);
    await contract.withdraw();
}
  return (
    
    
    <div >
        <div className="heading1">
        <h1>Banking</h1>
        </div>
        <div className="body1">
        <div className="heading2">
        <h3>Initial Coin Offering</h3>
        </div>
        <div className="box1">
        <input id="holder" type="number" placeholder="enterAmount" value={text} onChange={(e)=>{setText(e.target.value)}}/>
        </div>
        <div className="box1">
        <input  id="holder" type="number" placeholder=""/>
        </div>
        <div className="but">
        <button id='bute' onClick={()=>writeICO()}>Buy</button>
        </div>
</div>

<div className="body1">
        <div className="heading2">
        <h3>Stake</h3>
        </div>
        <div className="box1">
        <input id="holder" type="number" placeHolder="stack coins" value={amt} onChange={(e)=>setamt(e.target.value)}/>
        </div>
        <div className="box1">
        <input  id="holder" type="number" placeHolder="Time duration" value={dur} onChange={(e)=>setdur(e.target.value)}/>
        </div>
        <div className="but">
        <button id="stack" onClick={()=>writeamtStaked()}>stack</button>
        <button id="withdraw" onClick={()=>writeWithdraw()}>Withdraw</button>
        </div>
        </div>
       
       



    </div>
  );
}

export default ICO;
