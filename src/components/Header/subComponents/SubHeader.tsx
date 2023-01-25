import Grid from "@mui/material/Grid";
import SubHeaderButton from "./SubHeaderButton";
import ShieldIcon from "@mui/icons-material/Shield";
import SavingsIcon from "@mui/icons-material/Savings";
import React from "react";

const SubHeader = () => {
    return (
        <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            className="bg-gray-100"
        >
            <Grid item xs >
                <SubHeaderButton
                    tooltipText={"View info about your active team"}
                    startIcon={<ShieldIcon sx={{ color: "primary.main" }} />}
                    buttonText={"Real Madrid"}
                    href={"/active-team"}
                />
            </Grid>
            <Grid item xs>
                <SubHeaderButton
                    startIcon={<SavingsIcon sx={{ color: "primary.main" }} />}
                    buttonText="Coins: 256"
                    tooltipText={null}
                    href="/shop"
                />
            </Grid>
        </Grid>
    );
};

export default SubHeader
