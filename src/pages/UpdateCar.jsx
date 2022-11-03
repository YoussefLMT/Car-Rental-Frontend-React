import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../axios'
import Sidebar from '../components/Sidebar'
import './styles/cars.css'

function UpdateCar() {

  const [car, setCar] = useState({})
  const [brands, setBrands] = useState([])
  const [errors, setErrors] = useState([]);
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

  const handleChange = (e) => {
    e.persist();
    setCar({ ...car, [e.target.name]: e.target.value });
  }

  const updateCar = async (e) => {
    e.preventDefault();
    const response = await axiosInstance.put(`update-car/${params.id}`, car)
    if(response.data.status === 200){
      alert(response.data.message)
    }else if(response.data.status === 422){
      setErrors(response.data.validation_err)
    }
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
            <form onSubmit={updateCar}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" value={car.name} onChange={handleChange} name='name' className="form-control" id="name" />
                <span className='text-danger'>{errors.name}</span>
              </div>
              <div className="mb-3">
                <label htmlFor="model" className="form-label">Model Year</label>
                <input type="text" value={car.model_year} onChange={handleChange} name='model_year' className="form-control" id="model" />
                <span className='text-danger'>{errors.model_year}</span>
              </div>
              <div className="mb-3">
                <select class="form-select" value={car.brand} onChange={handleChange} name='brand' aria-label="Default select example">
                  <option selected>Brand</option>
                  {
                    brands.map((brand) => {
                      return (
                        <option value={brand.name} key={brand.id}>{brand.name}</option>
                      )
                    })
                  }
                </select>
                <span className='text-danger'>{errors.brand}</span>
              </div>
              <div className="mb-3">
                <label htmlFor="color" className="form-label">Color</label>
                <input type="text" value={car.color} onChange={handleChange} name='color' className="form-control" id="color" />
                <span className='text-danger'>{errors.color}</span>
              </div>
              <div className="mb-3">
                <label htmlFor="capacity" className="form-label">Capacity</label>
                <input type="text" value={car.capacity} onChange={handleChange} name='capacity' className="form-control" id="capacity" />
                <span className='text-danger'>{errors.capacity}</span>
              </div>
              <div className="mb-3">
                <label htmlFor="plate" className="form-label">Plate Number</label>
                <input type="text" value={car.plate_number} onChange={handleChange} name='plate_number' className="form-control" id="plate" />
                <span className='text-danger'>{errors.plate_number}</span>
              </div>
              <button type="submit" className="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateCar