const anySporeTokenAbi = require("../utils/abi/sporetoken.json");

export const CONTRACTS_TYPE = {
  SPORE_TOKEN: "SPORE_TOKEN"
};

export const CONTRACTS = {
  
  [CONTRACTS_TYPE.SPORE_TOKEN]: {
    1: { address: '', abi: '' },
    4: { address: "0x241D1cbECc34dD4b67D3a1A40696F0bED4E216Ab", abi: anySporeTokenAbi },
    56: { address: '', abi: '' },
    97: { address: '0x241D1cbECc34dD4b67D3a1A40696F0bED4E216Ab', abi: anySporeTokenAbi },
  },
};
