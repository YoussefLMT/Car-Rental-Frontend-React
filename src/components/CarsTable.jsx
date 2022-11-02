import React from 'react'

function CarsTable(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">model year</th>
                    <th scope="col">brand</th>
                    <th scope="col">color</th>
                    <th scope="col">capacity</th>
                    <th scope="col">plate number</th>
                    <th scope="col">actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.cars.map((car) => {
                        return (
                            <tr key={car.id}>
                                <th scope="row">{car.id}</th>
                                <td>{car.name}</td>
                                <td>{car.model_year}</td>
                                <td>{car.brand}</td>
                                <td>{car.color}</td>
                                <td>{car.capacity}</td>
                                <td>{car.pate_number}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table >
    )
}

export default CarsTable