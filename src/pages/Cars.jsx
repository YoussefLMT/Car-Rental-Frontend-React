import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios';
import CarsTable from '../components/CarsTable';
import Sidebar from '../components/Sidebar'
import './styles/cars.css'

function Cars() {

    const [form, setForm] = useState({
        name: '',
        model_year: '',
        brand: '',
        color: '',
        capacity: '',
        plate_number: '',
        error_list: [],
    });
    const [brands, setBrands] = useState([])
    const [message, setMessage] = useState('')
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [carsPerPage, setCarsPerPage] = useState(5)

    const indexOfLastCar = currentPage * carsPerPage
    const indexOfFirstCar = indexOfLastCar - carsPerPage
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar)


    const handleChange = (e) => {
        e.persist();
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const getBrands = async () => {
        const response = await axiosInstance.get('brands')
        setBrands(response.data.brands)
    }

    const getCars = async () => {
        const response = await axiosInstance.get('cars')
        setCars(response.data.cars)
        setLoading(false)
    }

    useEffect(() => {
        getBrands()
        getCars()
    }, [])

    const addNewCar = async (e) => {
        e.preventDefault();

        const data = {
            name: form.name,
            model_year: form.model_year,
            brand: form.brand,
            color: form.color,
            capacity: form.capacity,
            plate_number: form.plate_number
        }

        const response = await axiosInstance.post('/add-car', data)

        if (response.data.status === 200) {
            setMessage(response.data.message)
            getCars()
        } else {
            setForm({ ...form, error_list: response.data.validation_err });
        }
    }


    return (
        <>
            <Sidebar />
            <div className="content">
                <h1>Cars</h1>

                <div className="card brands" style={{ width: "1100px" }}>
                    <div className="card-header">
                        Cars Management

                        {/* Button trigger add car modal  */}
                        <button type="button" className="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addCarModal">
                            Add Car
                        </button>
                    </div>
                    <div class="card-body">
                        <CarsTable cars={currentCars} />

                        {loading && <h4>Loading...</h4>}
                    </div>
                </div>

                {/* Add Car Modal  */}
                <div className="modal fade" id="addCarModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add New Car</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={addNewCar}>
                                    {
                                        message && <div className="alert alert-success">
                                            {message}
                                        </div>
                                    }
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" name='name' value={form.name} onChange={handleChange} className="form-control" id="name" />
                                        <span className='text-danger'>{form.error_list.name}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="model" className="form-label">Model Year</label>
                                        <input type="text" name='model_year' value={form.model_year} onChange={handleChange} className="form-control" id="model" />
                                        <span className='text-danger'>{form.error_list.model_year}</span>
                                    </div>
                                    <div className="mb-3">
                                        <select class="form-select" name='brand' value={form.brand} onChange={handleChange} aria-label="Default select example">
                                            <option selected>Brand</option>
                                            {
                                                brands.map((brand) => {
                                                    return (
                                                        <option value={brand.name} key={brand.id}>{brand.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        <span className='text-danger'>{form.error_list.brand}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="color" className="form-label">Color</label>
                                        <input type="text" name='color' value={form.color} onChange={handleChange} className="form-control" id="color" />
                                        <span className='text-danger'>{form.error_list.color}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="capacity" className="form-label">Capacity</label>
                                        <input type="text" name='capacity' value={form.capacity} onChange={handleChange} className="form-control" id="capacity" />
                                        <span className='text-danger'>{form.error_list.capacity}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="plate" className="form-label">Plate Number</label>
                                        <input type="text" name='plate_number' value={form.plate_number} onChange={handleChange} className="form-control" id="plate" />
                                        <span className='text-danger'>{form.error_list.plate_number}</span>
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

export default Cars