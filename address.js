async function _address() {

  _mainaddress = 0;
  _warAddress = 0;
  _landGiveaway = 0;
  _landSales = 0;
  _tradingEvent = 0;
  const provider = new ethers.providers.Web3Provider(window.ethereum)
          
    const network = await provider.getNetwork();
    console.log(network);
    if(network.chainId == 421614) {
      _mainaddress = "0xE45483fcF4Cce2E255B085F732f5655f74333463";
      _warAddress = "0xaeC0FC9788482d7A1e43AdAD153a9D0aB4DDe692";
      _landGiveaway = "0x596A046ec7488692cb7FE45E899d53A369605a55";
      _landSales = "0x3c28327eB3533E2387EB2CDDb7f52331BBBdF163";
      _tradingEvent = "0xe3fD50C94Fc5b1dFe0E809b22b645092210D6afb";

      console.log("Testnet Arbitrum Chain: Last Updated 7/25/2024 - 1");
    }
    if(network.chainId == 31337) {
      _mainaddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      _warAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      _landGiveaway = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
      _landSales = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
      _tradingEvent = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
      console.log("Local Host Chain");
    }
    else{console.log}

      const mainaddress = _mainaddress;
      const waraddress = _warAddress;
      const landGiveaway = _landGiveaway;
      const landSales = _landSales;
      const tradingEvent = _tradingEvent;

      const _IHATEJAVASCRIPT = [mainaddress,waraddress,landGiveaway,landSales,tradingEvent];

      return(_IHATEJAVASCRIPT);
  }