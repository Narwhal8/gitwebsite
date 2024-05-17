async function _address() {

        
    let _address = "0x71F733bAdF73bEfBBB1fC745387D27B9e5001463";
    let _warAddress = "0xb61d0316F09191C45b8b4Ff9dBFA50b7ecDAdf23";
    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
          
    const network = await provider.getNetwork();
    console.log(network);
    if(network.chainId == 84532) {
      _address = "0x71F733bAdF73bEfBBB1fC745387D27B9e5001463";
      _warAddress = "0xb61d0316F09191C45b8b4Ff9dBFA50b7ecDAdf23";
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