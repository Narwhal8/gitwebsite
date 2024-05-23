async function _address() {

        
    let _address = "0x596A046ec7488692cb7FE45E899d53A369605a55";
    let _warAddress = "0x3c28327eB3533E2387EB2CDDb7f52331BBBdF163";
    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
          
    const network = await provider.getNetwork();
    console.log(network);
    if(network.chainId == 84532) {
      _address = "0x596A046ec7488692cb7FE45E899d53A369605a55";
      _warAddress = "0x3c28327eB3533E2387EB2CDDb7f52331BBBdF163";
      console.log("Testnet Chain: Last Updated 5/23/2024 - 2");
    }
    if(network.chainId == 31337) {
      _address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      _warAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      console.log("Local Host Chain");
    }
    else{console.log}

      const address = _address;
      const waraddress = _warAddress;

      const _IHATEJAVASCRIPT = [address,waraddress];

      return(_IHATEJAVASCRIPT);
  }