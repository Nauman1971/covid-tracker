import { Divider } from "@material-ui/core";
import React from "react";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import Loader from "./Loader";
import CountUp from "react-countup";

const Cards = ({data}) => {
    const {confirmed, deaths, recovered, lastUpdate} = data;
    if(!confirmed) {
        return <Loader />
    }
    return (
        <div className="cards-container">
            <Card className="infected-card">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
            </Card>
            <Card className="recovered-card">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                </CardContent>
            </Card>
            <Card className="deaths-card">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Cards;