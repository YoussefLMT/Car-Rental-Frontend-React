import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart() {
    return (
        <div>
            <h1>Proportion of reservations</h1>

            <Bar
                options={{

                }}

                data={{
                    labels: labels,
                    datasets: [{
                        label: "Nombre des visites par mois",
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                        backgroundColor: [
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