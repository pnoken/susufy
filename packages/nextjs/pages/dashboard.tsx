import type { NextPage } from "next";
import Image from "next/image";
import { Header } from "~~/components/Header";
import { MetaHeader } from "~~/components/MetaHeader";
import Stakings from "~~/components/Transactions";
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
                            <div className="divider"></div>
                            <h3 className="text-gray-300">History</h3>
                            <h3 className="p-4">Contributions</h3>
                            <h3 className="p-4">Collections</h3>

                        </div>
                    </div>
                </div>


                {activeTab === "community" ? (<Stakings />) : activeTab === "contributions" ? <Stakings /> :
                    <div className="md:w-5/6 w-full bg-gray-300">
                        <div className="grid card">
                            <div className="bg-red-700 relative text-white rounded-b-lg p-6 h-80 flex flex-col bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/images/graphic-side.png)' }}>
                            </div>
                            <div className="grid card p-2 m-4 mt-60 absolute buttom-0">
                                <div className="gap-4 text-gray-300 flex flex-row mx-auto">

                                    <div className="card bg-white gap-4 m-4 rounded-box p-4">
                                        <div className="flex-row flex justify-between items-center">
                                            <h2> Total <br /> Contributions</h2>
                                            <h2 className="text-xl text-red-500">9,500</h2>
                                        </div>
                                        <progress className="progress w-56" value="40" max="100"></progress>

                                    </div>
                                    <div className="card bg-white gap-4 m-4 rounded-box p-4">
                                        <div className="flex-row flex justify-between items-center">
                                            <h2> Total <br /> Contributions</h2>
                                            <h2 className="text-xl text-red-500">9,500</h2>
                                        </div>
                                        <progress className="progress w-56" value="40" max="100"></progress>

                                    </div>
                                    <div className="card bg-white gap-4 m-4 rounded-box p-4">
                                        <div className="flex-row flex justify-between items-center">
                                            <h2> Total <br /> Contributions</h2>
                                            <h2 className="text-xl text-red-500">9,500</h2>
                                        </div>
                                        <progress className="progress w-56" value="40" max="100"></progress>

                                    </div>
                                    <div className="card bg-white gap-4 m-4 rounded-box p-4">
                                        <div className="flex-row flex justify-between items-center">
                                            <h2> Total <br /> Contributions</h2>
                                            <h2 className="text-xl text-red-500">9,500</h2>
                                        </div>
                                        <progress className="progress bg-none progress-error w-56" value="40" max="100"></progress>

                                    </div>

                                </div>
                            </div>

                            <div className="grid card p-2 m-4 mt-10">
                                <div className="gap-3 text-gray-300 flex flex-row">


                                    <div className="card bg-white m-4 rounded-box p-4 w-1/4">
                                        <h2>Contributions</h2>

                                        <div className="flex gap-12">
                                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 70, "--size": "12rem", "--thickness": "2rem" }}>70%</div>



                                        </div>
                                    </div>

                                    <div className="card bg-white m-4 rounded-box p-4 w-2/4">
                                        <h2>Current Money Contributed</h2>


                                    </div>
                                    <div className="card bg-white m-4 rounded-box p-4 w-1/4 flex justify-center" style={{ backgroundImage: 'url(/images/credit-score.png)' }}>
                                        <div>
                                            <h1 className="text-2xl text-center">45</h1>
                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div className="m-4 p-2">
                                <Stakings />
                            </div>

                        </div>
                        {/* <StakeContractInteraction key={StakerContract?.address} address={StakerContract?.address} />


                    <Stakings /> */}

                    </div>}
            </div>

        </>
    );
};

export default StakerUI;
