import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import './styles/brands.css'
import axiosInstance from '../axios'
import BrandsTable from '../components/BrandsTable'


function Brands() {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})
    const [brands, setBrands] = useState([])
    const [loading, setLoading] = useState(true)

    const addNewBrand = async (e) => {
        e.preventDefault()

        const response = await axiosInstance.post('/add-brand', { name: name })

        if (response.data.status === 200) {
            setMessage(response.data.message)
            getBrands()
        } else {
            setErrors(response.data.validation_err)
        }
    }

    const getBrands = async () => {
        const response = await axiosInstance.get('brands')
        setBrands(response.data.brands)
        setLoading(false)
    }

    useEffect(() => {
        getBrands()
    }, [])


    return (
        <>
            <Sidebar />
            <div className="content">
                <h1>Brands</h1>
                <div className="card brands" style={{ width: "1100px" }}>
                    <div className="card-header">
                        Brands Management

                        {/* Button trigger add brands modal  */}
                        <button type="button" className="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addBrandModal">
                            Add Brand
                        </button>
                    </div>
                    <div class="card-body">
                        <BrandsTable brands={brands} />

                        {loading && <h4>Loading...</h4>}

                    </div>
                </div>


                {/* Add Brand Modal  */}
                <div className="modal fade" id="addBrandModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add New Brand</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={addNewBrand}>
                                    {
                                        message && <div className="alert alert-success">
                                            {message}
                                        </div>
                                    }
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" />
                                        <span className="text-danger">{errors.name}</span>
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
            </div >
        </>
    )
}

export default Brands