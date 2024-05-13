async function _address() {

        
    let _address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    let _warAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
          
    const network = await provider.getNetwork();
    console.log(network);
    if(network.chainId == 11155111) {
      _address = "0x0102a5b47EBCa79e7AbAAe884184F4Dc7d1653e9";
      _warAddress = "0x0c5A2E0bbD09cDe624b00e6b8E158Da3612EE47C";
      console.log("Testnet Chain");
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