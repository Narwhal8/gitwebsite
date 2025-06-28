
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
      cityAddress = "0xa8b45cfcea626f5ae32dbcf08ba4b8eaa72d35e4";
      baseAddress = "0xb8c77c2abbbc1bce7f3d4daba530a11d4f489bbe";
      merchantAddress = "0x705698c5f3286a4c84d34b55937221ed6a046bf2";
      landGiveawayAddress = "0xe1f5dc06b8e14bb0f7268335262aa6fc80cea03e";
      warAddress = "0x4E47301644Fc4073F01f06212fc40279F7284D7c";
      eventAddress = "0x21A7e12ea4894560E2c329649da6100BF62A4246";
      productionAddress = "0x5B50d47632AB84DE019C2c50cad4B2478adC3EcA";

      console.log("Testnet Arbitrum Chain: Last Updated 3/23/2025 - 1");
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
      console.log("Website Last Updated:  6/28/2025 - 2");
  }
    
  function secondsToHMS(_new_Time) {
    _new_Time = Math.trunc(_new_Time / 3600) +  " Hours " +  (Math.trunc(_new_Time / 60) % 60) +  " Minutes " +  Math.trunc(_new_Time % 60) +  " Seconds ";
    return(_new_Time)
  }