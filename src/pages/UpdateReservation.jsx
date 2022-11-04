import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../axios'
import Sidebar from '../components/Sidebar'
import './styles/reservations.css'

function UpdateReservation() {

    const [reservation, setReservation] = useState([])
    const [cars, setCars] = useState([])
    const [errors, setErrors] = useState([]);
    const params = useParams()

    const getReservation = async () => {
        const response = await axiosInstance.get(`get-reservation/${params.id}`)
        if (response.data.status === 200) {
            setReservation(response.data.reservation)
        } else if (response.data.status === 404) {
            console.log(response.data.message)
        }
    }

    const getCars = async () => {
        const response = await axiosInstance.get('cars')
        setCars(response.data.cars)
    }

    const handleChange = (e) => {
        e.persist();
        setReservation({ ...reservation, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        getReservation()
        getCars()
    }, [])

    return (
        <>
            <Sidebar />
            <div className="content">
                <h1>Reservations</h1>
                <div className="card reservations" style={{ width: "1100px" }}>
                    <div className="card-header">
                        Reservations Management
                    </div>
                    <div class="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="fname" className="form-label">First Name</label>
                                <input type="text" value={reservation[0].first_name} onChange={handleChange} name='first_name' className="form-control" id="fname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lname" className="form-label">Last Name</label>
                                <input type="text" value={reservation[0].last_name} onChange={handleChange} name='last_name' className="form-control" id="lname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" value={reservation[0].phone} onChange={handleChange} name='phone' className="form-control" id="phone" />
                            </div>
                            <div className="mb-3">
                                <select class="form-select" value={reservation[0].car_id} onChange={handleChange} name='car_id' aria-label="Default select example">
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
                                <input type="date" value={reservation[0].start_date} onChange={handleChange} name='start_date' className="form-control" id="start_date" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="end_date" className="form-label">End Date</label>
                                <input type="date" value={reservation[0].end_date} onChange={handleChange} name='end_date' className="form-control" id="end_date" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="amount" className="form-label">Total amount</label>
                                <input type="text" value={reservation[0].total_amount} onChange={handleChange} name='total_amount' className="form-control" id="amount" />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateReservation