import React from 'react'
import Sidebar from '../components/Sidebar'

function Reservations() {
    return (
        <>
            <Sidebar />
            <div className="content">
                <h1>Reservations</h1>

                <div className="card brands" style={{ width: "1100px" }}>
                    <div className="card-header">
                       Reservations Management
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reservations