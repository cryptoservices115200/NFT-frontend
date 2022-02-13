const anySporeTokenAbi = require("../utils/abi/sporetoken.json");

export const CONTRACTS_TYPE = {
  SPORE_TOKEN: "SPORE_TOKEN"
};

export const CONTRACTS = {
  
  [CONTRACTS_TYPE.SPORE_TOKEN]: {
    1: { address: '', abi: '' },
    4: { address: "0xB7FaC4E1E2f9D0a8E325987947C7297C7A44c2F6", abi: anySporeTokenAbi },
    56: { address: '', abi: '' },
    97: { address: '0xB7FaC4E1E2f9D0a8E325987947C7297C7A44c2F6', abi: anySporeTokenAbi },
  },
};
