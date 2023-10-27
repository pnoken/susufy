import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { StakeContractInteraction } from "~~/components/stake";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import { useState } from "react";

const StakerUI: NextPage = () => {
    const { data: StakerContract } = useDeployedContractInfo("Staker");
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };


    return (
        <>


            <MetaHeader />
            <div className="flex">
                <div className="md:block hidden bg-white min-h-full md:w-1/6">
                    <div className="grid card p-2 m-4">
                        <div className="gap-2 text-gray-400 flex flex-col">
                            <h3 className="text-gray-300">Home</h3>
                            <h3 className={`${activeTab === "dashboard" ? 'bg-red-600 text-white' : 'text-gray-300'}  p-4 cursor-pointer`} onClick={() => handleTabClick('dashboard')}>Dashboard</h3>
                            <h3 className={`${activeTab === "community" ? 'bg-red-600 text-white' : 'text-gray-300'}  p-4 cursor-pointer`} onClick={() => handleTabClick('community')}>Community</h3>
                            <div className="divider"></div>
                            <h3 className="text-gray-300">History</h3>
                            <h3 className={`${activeTab === "contributions" ? 'bg-red-600 text-white' : 'text-gray-300'}  p-4 cursor-pointer`} onClick={() => handleTabClick('contributions')}>Contributions</h3>
                            <h3 className="p-4">Collections</h3>


                        </div>
                    </div>
                </div>


                <StakeContractInteraction key={StakerContract?.address} address={StakerContract?.address} activeTab={activeTab} handleTabClick={handleTabClick} />

            </div>

        </>
    );
};

export default StakerUI;
