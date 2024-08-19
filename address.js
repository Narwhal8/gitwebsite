

cityAddress = "";
baseAddress = "";
merchantAddress = "";
landGiveawayAddress = "";
warAddress = "";
eventAddress = "";

async function _address() {

  const provider = new ethers.providers.Web3Provider(window.ethereum)
          
    const network = await provider.getNetwork();
    console.log(network);
    if(network.chainId == 421614) {
      cityAddress = "0x14Fc86cdDf7cFB65E51597b0402C6D6F11f02e90";
      baseAddress = "0x02E664619CCA7aa9382539CcFFffE055aDCC67e2";
      merchantAddress = "0xe74a6231D85Dd06b9E9b9455E841DEEE81A8B1a5";
      landGiveawayAddress = "0x92Cc2e722732ea0822d6D1701023ec388b879b95";
      warAddress = "0x40DAcfF4dAba8F6E45e597Eb6C413471949FD8bB";
      eventAddress = "0x0D872ACd1a7dFA8466f3B23ac20BB5aBC162dfc4";

      console.log("Testnet Arbitrum Chain: Last Updated 8/19/2024 - 1");
    }
    else if(network.chainId == 31337) {
      cityAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      baseAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      merchantAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
      landGiveawayAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
      warAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
      eventAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
      console.log("Local Host Chain");
    }
    else{console.log("wrong chain")}
  }