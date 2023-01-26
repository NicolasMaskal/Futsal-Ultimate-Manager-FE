import PackCard from "./PackCard";
import Typography from "@mui/material/Typography";
import silverPlayer from "../../images/silver-pack-image.png";
import React from "react";

const SilverPackDescription = () => {
    return (
        <>
            <Typography>
                <Typography display="inline" variant="body2" color="text.secondary">
                    {"The "}
                </Typography>
                <Typography
                    display="inline"
                    variant="body2"
                    color="text.secondary"
                    className="font-bold"
                >
                    {"Silver"}
                </Typography>
                <Typography
                    display="inline"
                    variant="body2"
                    color="text.secondary"
                >
                    {
                        " Pack contains players with higher ratings and more advanced skills, compared to the Bronze Pack. "
                    }
                </Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {
                    "These players have proven themselves on the field and can make an immediate impact on your team."
                }
            </Typography>
        </>



    );


}
const SilverPackCard: React.FC<{animationDuration: number}> = ({animationDuration}) => {
    return (
        <PackCard
            packName="SILVER"
            color={"#71706E"}
            description={
                <SilverPackDescription/>
            }
            price={500}
            imgSrc={silverPlayer}
            animationDuration={animationDuration}
        />
    );
};

export default SilverPackCard