import Box from "../../components/common/Box";
import Button from "../../components/common/Button";
import Flex from "../../components/common/Flex";
import Text from "../../components/common/Text";

import { useContext, useEffect, useState } from "react";
import Web3 from 'web3';

import { useWeb3React } from "@web3-react/core";
import { injected } from "../../components/wallet/connectors";
import { CONTRACTS, CONTRACTS_TYPE } from '../../utils/contracts';
import { userInfo } from "os";

let web3, _depoAddress;

interface Param {
    user: string;
    tokenId: number;
}
const Mint = () => {

    const { active, account, library, chainId, connector, activate, deactivate } = useWeb3React();
    const [mintAmount, setMintAmount] = useState(0);
    const [tokenURICount, setTokenURICount] = useState(0);

    let data: Param[] = [];

    // const httpProvider = new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
    // const web3 = new Web3(httpProvider);
    useEffect(() => {
        (async () => {
            if (account && chainId && library) {
                // console.log(CONTRACTS[CONTRACTS_TYPE.SPORE_TOKEN][chainId]);
                console.log(chainId);
                web3 = new Web3(library.provider);
                // console.log(CONTRACTS[CONTRACTS_TYPE.SPORE_TOKEN][chainId].address);
                // console.log(CONTRACTS[CONTRACTS_TYPE.SPORE_TOKEN][chainId].abi);
                // console.log(CONTRACTS[CONTRACTS_TYPE.SPORE_TOKEN][chainId]);
                let metadata = CONTRACTS[CONTRACTS_TYPE.SPORE_TOKEN][4]?.abi;
                let addr = CONTRACTS[CONTRACTS_TYPE.SPORE_TOKEN][4]?.address;

                let sporeWeb3 = new web3.eth.Contract(metadata, addr);
                let result = await sporeWeb3.methods.tokenURICount().call();
                console.log(tokenURICount);

                setTokenURICount(result);
            }
        })();
    }, [chainId, library, account])

    function connect() {
        activate(injected, async (error) => {
            console.log(error);
        });
    }

    async function disconnect() {
        try {
            deactivate()
        } catch (ex) {
            console.log(ex)
        }
    }

    async function mint() {
        if (account && chainId && library) {
            for (let i = Number(tokenURICount); i < tokenURICount + mintAmount; i++) {
                data.push({ user: account, tokenId: i});
            }

            let metadata1 = CONTRACTS[CONTRACTS_TYPE.SPORE_TOKEN][4]?.abi;
            let addr1 = CONTRACTS[CONTRACTS_TYPE.SPORE_TOKEN][4]?.address;

            web3 = new Web3(library.provider);

            let sporeWeb3 = new web3.eth.Contract(metadata1, addr1);
            await sporeWeb3.methods.mint(data.map((item) => ({user: item.user, tokenId: item.tokenId}))).send({ from: account, value: 10000000000000000 });
        }

    }

    function setAmount(val: string) {
        setMintAmount(Number(val));
    }


    return (
        <Box cssClasses={["section-pad-top", "bg-dark1"]}>
            <Flex
                cssClasses={["container"]}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <h1>Mint</h1>
                <p className="mt-1 text-center">
                    Our collection of unique NFTs that can be bought and sold on our
                    marketplace..
                </p>
                <Box cssClasses={["mt-4", "pt-4"]}>
                    {/* <Button secondary text="Connect Wallet!" /> */}
                    {active ?
                        <Button secondary text={`${account}`} onClick={disconnect} />
                        :
                        <Button secondary text="Connect Wallet" onClick={connect} />
                    }
                </Box>
                {active ?
                    <div className="mint-container">
                        Amount : &nbsp;<Text cssClasses={["secondary-txt rounded-pill"]} onChange={setAmount} />
                        <Button tertiary text="Mint" onClick={mint} />
                    </div>
                    :
                    <div className="mint-container">

                    </div>


                }

            </Flex>
        </Box>
    );
};

export default Mint;
