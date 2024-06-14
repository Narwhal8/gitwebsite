async function _address() {

        
    let _address = "0x596A046ec7488692cb7FE45E899d53A369605a55";
    let _warAddress = "0x3c28327eB3533E2387EB2CDDb7f52331BBBdF163";
    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
          
    const network = await provider.getNetwork();
    console.log(network);
    if(network.chainId == 421614) {
      _address = "0x0102a5b47EBCa79e7AbAAe884184F4Dc7d1653e9";
      _warAddress = "0x0c5A2E0bbD09cDe624b00e6b8E158Da3612EE47C";
      _landGiveaway = "0xFAc05C6A91D3fe6FB838Fc3226CcA6Cbd4AB6D5c";
      _landSales = "0x71F733bAdF73bEfBBB1fC745387D27B9e5001463"
      console.log("Testnet Arbitrum Chain: Last Updated 6/14/2024 - 1");
    }
    if(network.chainId == 31337) {
      _address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      _warAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      _landGiveaway = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
      _landSales = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
      console.log("Local Host Chain");
    }
    else{console.log}

      const address = _address;
      const waraddress = _warAddress;
      const landGiveaway = _landGiveaway;
      const landSales = _landSales;

      const _IHATEJAVASCRIPT = [address,waraddress,landGiveaway,landSales];

      return(_IHATEJAVASCRIPT);
  }