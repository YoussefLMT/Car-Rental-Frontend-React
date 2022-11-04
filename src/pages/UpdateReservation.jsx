import React from 'react'
import Sidebar from '../components/Sidebar'
import './styles/reservations.css'

function UpdateReservation() {
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