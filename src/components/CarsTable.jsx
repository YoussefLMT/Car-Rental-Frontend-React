import React from 'react'
import axiosInstance from '../axios';

function CarsTable(props) {

    const deleteCar = async (e, id) => {
        const deleteBtn = e.currentTarget;

        try {
            await axiosInstance.delete(`/delete-car/${id}`)
            deleteBtn.closest('tr').remove();

        } catch (error) {
            console.log(error)
        }
    }


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
                                <td>{car.plate_number}</td>
                                <td>
                                    <button type="button" onClick={(e) => deleteCar(e, car.id)} class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table >
    )
}

export default CarsTable