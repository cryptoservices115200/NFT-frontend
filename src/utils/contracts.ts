const anySporeTokenAbi = require("../utils/abi/sporetoken.json");

export const CONTRACTS_TYPE = {
  SPORE_TOKEN: "SPORE_TOKEN"
};

export const CONTRACTS = {
  
  [CONTRACTS_TYPE.SPORE_TOKEN]: {
    1: { address: '', abi: '' },
    4: { address: "0x5CB559a63389015864AB5c968243D5af8DaCC04b", abi: anySporeTokenAbi },
    56: { address: '', abi: '' },
    97: { address: '0x5CB559a63389015864AB5c968243D5af8DaCC04b', abi: anySporeTokenAbi },
  },
};
