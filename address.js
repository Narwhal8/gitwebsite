
cityAddress = "";
baseAddress = "";
merchantAddress = "";
landGiveawayAddress = "";
warAddress = "";
eventAddress = "";

async function address() {

  const provider = new ethers.providers.Web3Provider(window.ethereum)
          
    const network = await provider.getNetwork();
    console.log(network);
    if(network.chainId == 421614) {
      cityAddress = "0x6Ec9d89CBE255Ea7140301B60E43fb809C30EC9c";
      baseAddress = "0x44b47a5e7e537c041b2c3f8cbf9782a9e3d4d604";
      merchantAddress = "0x09ae43D7a7951F59F466E5f4F5Bf1F7D881B2f57";
      landGiveawayAddress = "0xA740308c1aC0448546aef9c57cD2Db0e8174470C";
      warAddress = "0x125700a956c23af8b3946FbCaF7D29059F6b0F87";
      eventAddress = "0xC5AEf37171124F6d60c769405d1d61B44325aDb0";
      productionAddress = "0xBa487794fA6dC0D80B769f71334c8a4a9091fbb3";

      console.log("Testnet Arbitrum Chain: Last Updated 2/16/2025 - 1");
    }
    else if(network.chainId == 31337) {
      cityAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      baseAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      merchantAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
      landGiveawayAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
      warAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
      eventAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
      productionAddress = "0x0165878a594ca255338adfa4d48449f69242eb8f";
      console.log("Local Host Chain");
    }
    else{console.log("wrong chain")}
  }
    
  function secondsToHMS(_new_Time) {
    _new_Time = Math.trunc(_new_Time / 3600) +  " Hours " +  (Math.trunc(_new_Time / 60) % 60) +  " Minutes " +  Math.trunc(_new_Time % 60) +  " Seconds ";
    return(_new_Time)
  }