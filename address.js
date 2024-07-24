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
      _mainaddress = "0x6be4b4B728f8F78B005ff8B44De5ECEc46aCA8E4";
      _warAddress = "0x658bd24E41D3249FAcA833fb80303366111BE4C5";
      _landGiveaway = "0x8749Cee1Eb5BEDFE5d77F9ae82aA0698B85FB0bc";
      _landSales = "0x92360983601EFD66EB6470867F12b31F1a5aC473";
      _tradingEvent = "0xFD5c5ED20F4017d7E248A6f7c3B9573fcc8A53e1";

      console.log("Testnet Arbitrum Chain: Last Updated 7/23/2024 - 1");
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