import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

function BarChart(props) {

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return (
        <div>
            <h4>Proportion of reservations</h4>

            <Bar
                options={{

                }}

                data={{
                    labels: labels,
                    datasets: [{
                        label: "Number of reservations per month",
                        data: props.monthCount?.map((c) => c.count),
                        backgroundColor: [
                            '#1851A8',
                            '#1851A8',
                            '#1851A8',
                            '#1851A8',
                            '#1851A8',
                            '#1851A8',
                            '#1851A8',
                            '#1851A8',
                            '#1851A8',
                            '#1851A8',
                            '#1851A8',
                            '#1851A8',
                        ],
                        borderColor: [
                            '#1F7B5F',
                            '#1F7B5F',
                            '#1F7B5F',
                            '#1F7B5F',
                            '#1F7B5F',
                            '#1F7B5F',
                            '#1F7B5F',
                            '#1F7B5F',
                            '#1F7B5F',
                            '#1F7B5F',
                            '#1F7B5F',
                            '#1F7B5F',
                        ],
                        borderWidth: 1
                    }]
                }}
            />
        </div>
    )
}

export default BarChart