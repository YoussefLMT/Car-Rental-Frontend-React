import React from 'react'
import Sidebar from '../components/Sidebar'
import './styles/cars.css'

function Cars() {
    return (
        <>
            <Sidebar />
            <div className="content">
             <h1>Cars</h1>

             <div className="card brands" style={{ width: "1100px" }}>
                    <div className="card-header">
                        Brands Managment
                    </div>   
             </div>        
            </div>

        </>
    )
}

export default Cars