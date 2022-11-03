import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../axios'
import Sidebar from '../components/Sidebar'
import './styles/cars.css'

function UpdateCar() {

  const [car, setCar] = useState({})
  const [brands, setBrands] = useState([])
  const params = useParams()

  const getCar = async () => {
    const response = await axiosInstance.get(`get-car/${params.id}`)
    if (response.data.status === 200) {
      setCar(response.data.car)
    } else if (response.data.status === 404) {
      console.log(response.data.message)
    }
  }

  const getBrands = async () => {
    const response = await axiosInstance.get('brands')
    setBrands(response.data.brands)
  }

  useEffect(() => {
    getCar()
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
          </div>
          <div class="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" value={car.name} name='name' className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="model" className="form-label">Model Year</label>
                <input type="text" value={car.model_year} name='model_year' className="form-control" id="model" />
              </div>
              <div className="mb-3">
                <select class="form-select" value={car.brand} name='brand' aria-label="Default select example">
                  <option selected>Brand</option>
                  {
                    brands.map((brand) => {
                      return (
                        <option value={brand.name} key={brand.id}>{brand.name}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="color" className="form-label">Color</label>
                <input type="text" value={car.color} name='color' className="form-control" id="color" />
              </div>
              <div className="mb-3">
                <label htmlFor="capacity" className="form-label">Capacity</label>
                <input type="text" value={car.capacity} name='capacity' className="form-control" id="capacity" />
              </div>
              <div className="mb-3">
                <label htmlFor="plate" className="form-label">Plate Number</label>
                <input type="text" value={car.plate_number} name='plate_number' className="form-control" id="plate" />
              </div>
              <button type="submit" className="btn btn-primary">Save changes</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateCar