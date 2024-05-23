async function _address() {

        
    let _address = "0x92360983601EFD66EB6470867F12b31F1a5aC473";
    let _warAddress = "0xFD5c5ED20F4017d7E248A6f7c3B9573fcc8A53e1";
    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
          
    const network = await provider.getNetwork();
    console.log(network);
    if(network.chainId == 84532) {
      _address = "0x92360983601EFD66EB6470867F12b31F1a5aC473";
      _warAddress = "0xFD5c5ED20F4017d7E248A6f7c3B9573fcc8A53e1";
      console.log("Testnet Chain: Last Updated 5/23/2024 - 1");
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