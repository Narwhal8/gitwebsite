async function _address() {

  _mainaddress = 0;
  _warAddress = 0;
  _landGiveaway = 0;
  _landSales = 0;
  const provider = new ethers.providers.Web3Provider(window.ethereum)
          
    const network = await provider.getNetwork();
    console.log(network);
    if(network.chainId == 421614) {
      _mainaddress = "0x0102a5b47EBCa79e7AbAAe884184F4Dc7d1653e9";
      _warAddress = "0x0c5A2E0bbD09cDe624b00e6b8E158Da3612EE47C";
      _landGiveaway = "0xFAc05C6A91D3fe6FB838Fc3226CcA6Cbd4AB6D5c";
      _landSales = "0x71F733bAdF73bEfBBB1fC745387D27B9e5001463"
      console.log("Testnet Arbitrum Chain: Last Updated 6/14/2024 - 1");
    }
    if(network.chainId == 31337) {
      _mainaddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      _warAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      _landGiveaway = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
      _landSales = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
      console.log("Local Host Chain");
    }
    else{console.log}

      const mainaddress = _mainaddress;
      const waraddress = _warAddress;
      const landGiveaway = _landGiveaway;
      const landSales = _landSales;

      const _IHATEJAVASCRIPT = [mainaddress,waraddress,landGiveaway,landSales];

      return(_IHATEJAVASCRIPT);
  }