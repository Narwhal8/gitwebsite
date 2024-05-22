async function _address() {

        
    let _address = "0x98DBC07260516bEAd75E92734fBa2BfF77995253";
    let _warAddress = "0x6be4b4B728f8F78B005ff8B44De5ECEc46aCA8E4";
    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
          
    const network = await provider.getNetwork();
    console.log(network);
    if(network.chainId == 84532) {
      _address = "0x98DBC07260516bEAd75E92734fBa2BfF77995253";
      _warAddress = "0x6be4b4B728f8F78B005ff8B44De5ECEc46aCA8E4";
      console.log("Testnet Chain: Last Updated 5/22/2024 - 1");
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