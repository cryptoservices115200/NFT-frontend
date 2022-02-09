import Box from "../../components/common/Box";
import Button from "../../components/common/Button";
import Flex from "../../components/common/Flex";
import Text from "../../components/common/Text";

import { useContext, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../components/wallet/connectors";

const Mint = () => {

    const { active, account, library, connector, activate, deactivate } = useWeb3React();

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
                <div className = "mint-container">
                    Amount : &nbsp;<Text cssClasses={["secondary-txt rounded-pill"]} />
                    <Button tertiary text="Mint" />
                </div>

            </Flex>
        </Box>
    );
};

export default Mint;
