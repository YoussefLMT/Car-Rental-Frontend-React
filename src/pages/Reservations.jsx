import React from 'react'
import Sidebar from '../components/Sidebar'
import './styles/reservations.css'

function Reservations() {
    return (
        <>
            <Sidebar />
            <div className="content">
                <h1>Reservations</h1>

                <div className="card resrvations" style={{ width: "1100px" }}>
                    <div className="card-header">
                       Reservations Management
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reservations