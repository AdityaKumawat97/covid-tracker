import React, {useState, useEffect} from 'react';
import { fetchdailyData} from '../../api'
import {Line, Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'
const Chart = () => {
    const[dailyData, setdailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () =>{
            setdailyData(await fetchdailyData())
        }
        // console.log(dailyData)
        fetchAPI()

    })

const lineChart = (
    dailyData.length?
    <Line
        data={{
            labels: dailyData.map(({date})=> date),
            datasets: [{
                data:dailyData.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
            },{
                data:dailyData.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                borderColor: 'rgba(255,0,0,0.5)',
                fill: true,
            }],
        }}
    />: null
)

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    );
}

export default Chart;
