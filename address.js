

cityAddress = "0xa18b15E554D613f9F7b14d6fe32c2E48dA5ac065";
baseAddress = "0x635CFc424EE4732B4C442D2543221Fae861395d9";
merchantAddress = "0x5462659873a31887000d5cDDD4a702D55acdd1D2";
landGiveawayAddress = "0xE8bC6497f076b1A76F63a181A7306a4FCd68992b";
warAddress = "0x6D0b3Ca0163716FD22e28A8CF084A43c7542bbee";
eventAddress = "0x94851547eF6B806074554531cc19343513b7e4D3";

async function _address() {

  const provider = new ethers.providers.Web3Provider(window.ethereum)
          
    const network = await provider.getNetwork();
    console.log(network);
    if(network.chainId == 421614) {
      cityAddress = "0xa18b15E554D613f9F7b14d6fe32c2E48dA5ac065";
      baseAddress = "0x635CFc424EE4732B4C442D2543221Fae861395d9";
      merchantAddress = "0x5462659873a31887000d5cDDD4a702D55acdd1D2";
      landGiveawayAddress = "0xE8bC6497f076b1A76F63a181A7306a4FCd68992b";
      warAddress = "0x6D0b3Ca0163716FD22e28A8CF084A43c7542bbee";
      tradingEvent = "0x94851547eF6B806074554531cc19343513b7e4D3";

      console.log("Testnet Arbitrum Chain: Last Updated 7/25/2024 - 1");
    }
    else if(network.chainId == 31337) {
      cityAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      baseAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      merchantAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
      landGiveawayAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
      warAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
      tradingEvent = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
      console.log("Local Host Chain");
    }
    else{console.log("address bruh moment")}
  }