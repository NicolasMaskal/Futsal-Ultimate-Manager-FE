import React from "react";
import PageDescription from "../../PageDescription";
import SubPageTitle from "../../SubPageTitle";
import ProceedButton from "../../Buttons/ProceedButton";

const MatchRewards: React.FC<{
  coinReward: number;
  onProceedClick: React.MouseEventHandler;
}> = ({ coinReward, onProceedClick }) => {
  return (
    <>
      <SubPageTitle content="Match Rewards" />
      <PageDescription>
        <span className="font-bold">{"Coins: "}</span> {coinReward}
      </PageDescription>
      <div className="flex items-center justify-center">
        <ProceedButton onProceedClick={onProceedClick} buttonSx={{ display: "block", alignSelf: "center" }} />
      </div>
    </>
  );
};

export default MatchRewards;
