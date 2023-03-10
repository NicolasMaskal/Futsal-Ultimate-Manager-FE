import Typography from "@mui/material/Typography";
import React from "react";
import InfoTooltip from "../Generic/InfoTooltip";
import { FetchedPlayersType } from "../../pages/PlayersPage";
import SkeletonInfo from "../Table/subComponents/SkeletonInfo";
import { Stack } from "@mui/material";

const PlayersInfo: React.FC<{ data: FetchedPlayersType | null }> = ({ data }) => {
  if (!data) {
    return <SkeletonInfo rowAmount={3} />;
  }

  return (
    <article className={"text-center pb-4"}>
      <Typography className="font-bold">
        {"Squad size: "}
        <Typography component={"span"} display="inline">
          {data.players.length}
        </Typography>
      </Typography>
      <Stack
        justifyContent={"center"}
        direction="row"
        alignItems="center"
        className={"pr-5"}
        gap={1}
      >
        <InfoTooltip
          title={`Average skill of your top ${data.player_amount_considered} players`}
        />
        <Typography className="font-bold">
          {" Team skill: "}
          <Typography component={"span"} display="inline">
            {data.team_skill}
          </Typography>
        </Typography>
      </Stack>
      <Typography className="font-bold">
        {"Average skill: "}
        <Typography component={"span"} display="inline">
          {data.average_skill}
        </Typography>
      </Typography>
    </article>
  );
};

export default PlayersInfo;
