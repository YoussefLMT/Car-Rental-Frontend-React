import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios'
import Sidebar from '../components/Sidebar'
import './styles/reservations.css'

function Reservations() {

    const [cars, setCars] = useState([])
    const [form, setForm] = useState({
        first_name: '',
        last_year: '',
        phone: '',
        car_id: '',
        start_date: '',
        end_date: '',
        total_mount: '',
        error_list: [],
    });

    const getCars = async () => {
        const response = await axiosInstance.get('/cars')
        setCars(response.data.cars)
    }

    useEffect(() => {
        getCars()
    }, [])

    return (
        <>
            <Sidebar />
            <div className="content">
                <h1>Reservations</h1>

                <div className="card resrvations" style={{ width: "1100px" }}>
                    <div className="card-header">
                       Reservations Management

                       {/* Button trigger add car reservation  */}
                       <button type="button" className="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addReservationModal">
                            Add Reservation
                        </button>
                    </div>
                </div>

                 {/* Add Reservation Modal  */}
                 <div className="modal fade" id="addReservationModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add New Car</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="fname" className="form-label">First Name</label>
                                        <input type="text" value={form.first_name} onChange={handleChange} name='first_name' className="form-control" id="fname" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lname" className="form-label">Last Name</label>
                                        <input type="text" value={form.last_name} onChange={handleChange} name='last_name' className="form-control" id="lname" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input type="text" value={form.phone} onChange={handleChange} name='phone' className="form-control" id="phone" />
                                    </div>
                                    <div className="mb-3">
                                        <select class="form-select" value={form.car_id} onChange={handleChange} name='car_id' aria-label="Default select example">
                                            <option selected>Car</option>
                                            {
                                                cars.map((car) => {
                                                    return (
                                                        <option value={car.id} key={car.id}>{car.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="start_date" className="form-label">Start Date</label>
                                        <input type="date" value={form.start_date} onChange={handleChange} name='start_date' className="form-control" id="start_date" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="end_date" className="form-label">End Date</label>
                                        <input type="date" value={form.end_date} onChange={handleChange} name='end_date' className="form-control" id="end_date" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="amount" className="form-label">Total amount</label>
                                        <input type="text" value={form.total_mount} onChange={handleChange} name='total_amount' className="form-control" id="amount" />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reservations