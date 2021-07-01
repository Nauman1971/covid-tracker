import React, {useEffect, useState} from "react";
import {Line, Bar} from "react-chartjs-2";
import axios from "axios";
import {dailyDataEndpoint} from "./endpoints";

const Chart = ({data}) => {
    const [dailyData, setDailyData] = useState([]);
    const {confirmed, recovered, deaths} = data.data;
    
    useEffect(() => {
        async function fetchApi () {
            const response = await axios.get(dailyDataEndpoint)
            return setDailyData(response.data);
        }
        fetchApi();
    }, [])

    const lineChart = (
        dailyData ? (
            <Line
            data={{
                labels: dailyData ? dailyData.map(data => data.reportDate) : null,
                datasets: [{
                    data: dailyData ? dailyData.map(data => data.confirmed.total) : null,
                    label: "Infected",
                    borderColor: "#3333ff",
                    fill: true
                },
                {
                        data: dailyData ? dailyData.map(data => data.deaths.total) : null,
                        label: "Deaths",
                        borderColor: "red",
                        backgroundColor: "rgba(255, 0, 0, 0.5)",
                        fill: true
                    }
                ]
            }}
            />
        ) : null
    );
    
    const barChart = (
        confirmed ? 
        <Bar 
        data ={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People',
                backgroundColor: [
                    'rgba(0, 0, 255, 0.5)',
                    'rgba(0, 255, 0, 0.5)',
                    'rgba(255, 0, 0, 0.5)',
                ],
                data: [confirmed.value, recovered.value, deaths.value]
            }]
        }}
        options={{
            legend: {display: false},
            title: {display: true, text: `Current state in ${data.countryName}`}
        }}
        />
        : null
    )
    return (
        <div className="chart-container">
            {data.countryName ? barChart : lineChart}
        </div>
    )
}

export default Chart;