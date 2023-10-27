import { Address } from "../scaffold-eth";
import { ETHToPrice } from "./EthToPrice";
import humanizeDuration from "humanize-duration";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import {
  useAccountBalance,
  useDeployedContractInfo,
  useScaffoldContractRead,
  useScaffoldContractWrite,
} from "~~/hooks/scaffold-eth";
import { getTargetNetwork } from "~~/utils/scaffold-eth";
import Stakings from "~~/components/Transactions";
import { Countdown } from "../Countdown";

export const StakeContractInteraction = ({ address, activeTab, handleTabClick }: { address?: string }) => {
  const { address: connectedAddress } = useAccount();
  const { data: StakerContract } = useDeployedContractInfo("Staker");
  const { data: ExampleExternalContact } = useDeployedContractInfo("ExampleExternalContract");
  const { balance: stakerContractBalance } = useAccountBalance(StakerContract?.address);
  const { balance: exampleExternalContractBalance } = useAccountBalance(ExampleExternalContact?.address);

  const configuredNetwork = getTargetNetwork();

  // Contract Read Actions
  const { data: threshold } = useScaffoldContractRead({
    contractName: "Staker",
    functionName: "threshold",
    watch: true,
  });
  const { data: timeLeft } = useScaffoldContractRead({
    contractName: "Staker",
    functionName: "timeLeft",
    watch: true,
  });
  const { data: myStake } = useScaffoldContractRead({
    contractName: "Staker",
    functionName: "balances",
    args: [connectedAddress],
    watch: true,
  });
  const { data: isStakingCompleted } = useScaffoldContractRead({
    contractName: "ExampleExternalContract",
    functionName: "completed",
    watch: true,
  });

  // Contract Write Actions
  const { writeAsync: stakeETH } = useScaffoldContractWrite({
    contractName: "Staker",
    functionName: "stake",
    value: "0.5",
  });
  const { writeAsync: execute } = useScaffoldContractWrite({
    contractName: "Staker",
    functionName: "execute",
  });
  const { writeAsync: withdrawETH } = useScaffoldContractWrite({
    contractName: "Staker",
    functionName: "withdraw",
  });

  return (
    <>
      {/* {isStakingCompleted && (
        <div className="flex flex-col items-center gap-2 bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mt-12 w-full max-w-lg">
          <p className="block m-0 font-semibold">
            {" "}
            🎉 &nbsp; Staking App triggered `ExampleExternalContract` &nbsp; 🎉{" "}
          </p>
          <div className="flex items-center">
            <ETHToPrice
              value={exampleExternalContractBalance != null ? exampleExternalContractBalance.toString() : undefined}
              className="text-[1rem]"
            />
            <p className="block m-0 text-lg -ml-1">staked !!</p>
          </div>
        </div>
      )}
      <div
        className={`flex flex-col items-center space-y-8 bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 w-full max-w-lg ${!isStakingCompleted ? "mt-24" : ""
          }`}
      >
        <div className="flex flex-col w-full items-center">
          <p className="block text-2xl mt-0 mb-2 font-semibold">Staker Contract</p>
          <Address address={address} size="xl" />
        </div>
        <div className="flex items-start justify-around w-full">

          <div className="flex flex-col items-center w-1/2">
            <p className="block text-xl mt-0 mb-1 font-semibold">You Staked</p>
            <span>
              {myStake ? formatEther(myStake) : 0} {configuredNetwork.nativeCurrency.symbol}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center shrink-0 w-full">
          <p className="block text-xl mt-0 mb-1 font-semibold">Total Staked</p>
          <div className="flex space-x-2">
            {<ETHToPrice value={stakerContractBalance != null ? stakerContractBalance.toString() : undefined} />}
            <span>/</span>
            {<ETHToPrice value={threshold ? formatEther(threshold) : undefined} />}
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex space-x-7">
            <button className="btn btn-primary" onClick={() => execute()}>
              Execute!
            </button>

          </div>

        </div>
      </div> */}






      {activeTab === "community" ? (<Stakings />) : activeTab === "contributions" ? <Stakings /> :
        <div className="md:w-5/6 w-full bg-gray-300">
          <div className="grid card">
            <div className="bg-red-700 relative text-white rounded-b-lg p-6 h-80 flex gap-5 flex justify-end bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/images/graphic-side.png)' }}>
              <div className="flex gap-5">
                <button className="btn glass text-2xl" onClick={() => stakeETH()}>Deposit</button>
                <button className="btn glass text-2xl text-white" onClick={() => withdrawETH()}>Withdraw</button>
              </div>
            </div>
            <div className="grid card p-2 m-4 mt-60 absolute buttom-0">
              <div className="gap-4 text-gray-300 flex flex-row mx-auto">

                <div className="card bg-white gap-4 m-4 rounded-box p-4">
                  <div className="flex-row flex justify-between items-center">
                    <h2> Total <br /> Contributions</h2>
                    <h2 className="text-xl text-red-500"><ETHToPrice value={stakerContractBalance != null ? stakerContractBalance.toString() : undefined} /></h2>
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


                <div className="card bg-white flex flex-col m-4 rounded-box p-4 w-1/4">
                  <h2 className="text-center">Contributions</h2>

                  <div className="flex gap-12">
                    <div className="radial-progress text-primary-content border-primary" style={{ "--value": 70, "--size": "12rem", "--thickness": "2rem" }}>70%</div>



                  </div>
                </div>

                <div className="card bg-white m-4 rounded-box flex flex-col justify-center p-4 w-2/4">
                  <h2 className="text-center">Monthly Goal</h2>

                  <h2 className="text-9xl text-center">{<ETHToPrice value={threshold ? formatEther(threshold) : undefined} />}</h2>
                </div>
                <div className="card bg-white m-4 rounded-box p-4 w-1/4 flex justify-center" style={{ backgroundImage: 'url(/images/credit-score.png)' }}>
                  <div>
                    <h1 className="text-9xl text-center">45</h1>
                  </div>



                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center w-1/2">
                <p className="block text-6xl mt-0 mb-1 font-semibold">Time Left</p>
                <Countdown />
              </div>
            </div>
            <div className="m-4 p-2">
              <Stakings />
            </div>

          </div>
          {/* <StakeContractInteraction key={StakerContract?.address} address={StakerContract?.address} />


                    <Stakings /> */}

        </div>}
    </>
  );
};
