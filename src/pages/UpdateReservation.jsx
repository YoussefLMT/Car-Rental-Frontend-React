import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import './styles/reservations.css'

function UpdateReservation() {

    const [cars, setCars] = useState({})
    const [reservation, setReservation] = useState([])
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

    useEffect(() => {
        getReservation()
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateReservation