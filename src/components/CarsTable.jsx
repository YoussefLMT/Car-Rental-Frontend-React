import React from 'react'
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../axios';

function CarsTable(props) {

    // const [car, setCar] = useState([])

    const deleteCar = async (e, id) => {
        const deleteBtn = e.currentTarget;
        try {
            await axiosInstance.delete(`/delete-car/${id}`)
            deleteBtn.closest('tr').remove();
        } catch (error) {
            console.log(error)
        }
    }

    // const getCar = async (id) => {
    //     try {
    //         const response = await axiosInstance.get(`/get-car/${id}`)
    //         setCar(response.data.car)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    return (
        <>
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
                                        <Link className="btn btn-warning" to={`update-car/${car.id}`}>Update</Link>
                                        {/* <button type="button" data-bs-toggle="modal" data-bs-target="#updateCarModal" onClick={() => getCar(car.id)} class="btn btn-danger">Test</button> */}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table >



            {/* <div className="modal fade" id="updateCarModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add New Car</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" name='name' value={car.name} className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="model" className="form-label">Model Year</label>
                                    <input type="text" name='model_year' value={car.model_year} className="form-control" id="model" />
                                </div>
                                <div className="mb-3">
                                    <select class="form-select" name='brand' value={car.brand} aria-label="Default select example">
                                        <option selected>Brand</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="color" className="form-label">Color</label>
                                    <input type="text" name='color' value={car.color} className="form-control" id="color" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="capacity" className="form-label">Capacity</label>
                                    <input type="text" name='capacity' value={car.capacity} className="form-control" id="capacity" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="plate" className="form-label">Plate Number</label>
                                    <input type="text" name='plate_number' value={car.plate_number} className="form-control" id="plate" />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default CarsTable