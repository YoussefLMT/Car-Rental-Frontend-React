import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios';
import Sidebar from '../components/Sidebar'
import './styles/cars.css'

function Cars() {

    const [data, setData] = useState({
        name: '',
        model_year: '',
        brand: '',
        color: '',
        capacity: '',
        plat_number: '',
        error_list: [],
    });
    const [brands, setBrands] = useState([])

    const handleChange = (e) => {
        setData(e.target.value);
    }

    const getBrands = async () => {
        const response = await axiosInstance.get('brands')
        setBrands(response.data.brands)
    }

    useEffect(() => {
        getBrands()
    }, [])


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


                        {/* Add Car Modal  */}
                        <div className="modal fade" id="addCarModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                <input type="text" value={data.name} onChange={handleChange} className="form-control" id="name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="model" className="form-label">Model Year</label>
                                                <input type="text" value={data.model_year} onChange={handleChange} className="form-control" id="model" />
                                            </div>
                                            <div className="mb-3">
                                                <select class="form-select" value={data.brand} onChange={handleChange} aria-label="Default select example">
                                                    <option selected>Brand</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="color" className="form-label">Color</label>
                                                <input type="text" value={data.color} onChange={handleChange} className="form-control" id="color" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="capacity" className="form-label">Capacity</label>
                                                <input type="text" value={data.capacity} onChange={handleChange} className="form-control" id="capacity" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="plat" className="form-label">Plat Number</label>
                                                <input type="text" value={data.plat_number} onChange={handleChange} className="form-control" id="plat" />
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
                </div>
            </div>

        </>
    )
}

export default Cars