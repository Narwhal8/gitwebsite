async function _address() {

        
    let _address = "0x9065d9445f4e10FA8E408Ceb2C64f4C81A570d11";
    let _warAddress = "0xcbFD14eCC463C19c215EA5abE38778E41CeD3346";
    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
          
    const network = await provider.getNetwork();
    console.log(network);
    if(network.chainId == 84532) {
      _address = "0x9065d9445f4e10FA8E408Ceb2C64f4C81A570d11";
      _warAddress = "0xcbFD14eCC463C19c215EA5abE38778E41CeD3346";
      console.log("Testnet Chain: Last Updated 5/20/2024 - 1");
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