const anySporeTokenAbi = require("../utils/abi/sporetoken.json");

export const CONTRACTS_TYPE = {
  SPORE_TOKEN: "SPORE_TOKEN"
};

export const CONTRACTS = {
  
  [CONTRACTS_TYPE.SPORE_TOKEN]: {
    1: { address: '', abi: '' },
    4: { address: "0xB48bceaAF3bF8aB9C5517518aF0dCc21F81790cE", abi: anySporeTokenAbi },
    56: { address: '', abi: '' },
    97: { address: '0xB48bceaAF3bF8aB9C5517518aF0dCc21F81790cE', abi: anySporeTokenAbi },
  },
};
