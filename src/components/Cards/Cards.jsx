import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import './Cards.module.css'
const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate }}) => {
    // console.log()
    if(!confirmed){
        return "loading..."
    }

    return (

        <div className="container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {/* gutterbottom is used to provide padding on the bottom */}
                            Infected
                        </Typography>
                        <Typography variant="h5"> {confirmed.value}</Typography>
                        <Typography colr="textSecondary"> REAL DATE</Typography>
                        <Typography variant="body-2">no.of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {/* gutterbottom is used to provide padding on the bottom */}
                            Recovered
                        </Typography>
                        <Typography variant="h5"> REAL DATA </Typography>
                        <Typography colr="textSecondary"> REAL DATE</Typography>
                        <Typography variant="body-2">no.of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {/* gutterbottom is used to provide padding on the bottom */}
                            Deaths
                        </Typography>
                        <Typography variant="h5"> REAL DATA </Typography>
                        <Typography colr="textSecondary"> REAL DATE</Typography>
                        <Typography variant="body-2">no.of death cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>

    );
}

export default Cards;
