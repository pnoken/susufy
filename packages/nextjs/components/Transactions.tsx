import React from "react";
import { formatEther } from "viem";
import { MetaHeader } from "~~/components/MetaHeader";
import { Spinner } from "~~/components/Spinner";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const Stakings: React.FC = () => {
    const { data: stakeEvents, isLoading } = useScaffoldEventHistory({
        contractName: "Staker",
        eventName: "Stake",
        fromBlock: 4346417n,
    });

    if (isLoading)
        return (
            <div className="flex justify-center items-center mt-10">
                <Spinner width="75" height="75" />
            </div>
        );
    return (
        <>
            <MetaHeader />
            <div className="flex items-center bg-white m-4 rounded-box flex-col flex-grow pt-10">
                <div className="overflow-x-auto w-full">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>ID</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {!stakeEvents || stakeEvents.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className="text-center">
                                        No events found
                                    </td>
                                </tr>
                            ) : stakeEvents?.map((event, index) => {
                                return (<tr key={index}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold"><Address address={event.args?.staker} /></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold"><Address address={event.args?.staker} /></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{event.args?.amount && formatEther(event.args?.amount)} ETH</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>)
                            })}


                        </tbody>


                    </table>
                </div>
            </div>
        </>
    );
};

export default Stakings;
