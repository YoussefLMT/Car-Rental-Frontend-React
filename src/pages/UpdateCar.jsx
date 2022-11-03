import React from 'react'
import Sidebar from '../components/Sidebar'
import './styles/cars.css'

function UpdateCar() {
  return (
    <>
      <Sidebar />
      <div className="content">
        <h1>Cars</h1>

        <div className="card brands" style={{ width: "1100px" }}>
          <div className="card-header">
            Cars Management
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateCar