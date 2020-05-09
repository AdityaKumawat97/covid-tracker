import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'
import { LinearProgress } from '@material-ui/core';
//cx is a classname library aleady present which helps us set multipple classes to a single jsx element
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    // console.log()
    if (!confirmed) {
        return "Loading..."
    }

    return (

        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected, styles.shadow)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {/* gutterbottom is used to provide padding on the bottom */}
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">no.of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {/* gutterbottom is used to provide padding on the bottom */}
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">no.of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {/* gutterbottom is used to provide padding on the bottom */}
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">no.of death cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>

    );
}

export default Cards;
