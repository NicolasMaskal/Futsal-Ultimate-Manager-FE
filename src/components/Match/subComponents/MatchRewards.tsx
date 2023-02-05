import React from "react";
import PageDescription from "../../Generic/PageDescription";
import SubPageTitle from "../../Generic/SubPageTitle";
import ProceedButton from "../../Buttons/ProceedButton";

const MatchRewards: React.FC<{
  coinReward: number;
}> = ({ coinReward }) => {
  const onProceedClick = () => {
    window.location.reload();
  };

  return (
    <>
      <SubPageTitle content="Match Rewards" />
      <PageDescription>
        <span className="font-bold">{"Coins: "}</span> {coinReward}
      </PageDescription>
      <div className="flex items-center justify-center">
        <ProceedButton
          onProceedClick={onProceedClick}
          buttonSx={{ display: "block", alignSelf: "center" }}
        />
      </div>
    </>
  );
};

export default MatchRewards;
