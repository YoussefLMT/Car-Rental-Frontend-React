import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import './styles/brands.css'


function Brands() {

    const [name, setName] = useState('')

    console.log(name)

    return (
        <>
            <Sidebar />
            <div className="content">
                <h1>Brands</h1>
                <div className="card brands" style={{ width: "1100px" }}>
                    <div className="card-header">
                        Brands Managment

                        {/* Button trigger add brands modal  */}
                        <button type="button" className="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addBrandModal">
                            Add Brand
                        </button>
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
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brands