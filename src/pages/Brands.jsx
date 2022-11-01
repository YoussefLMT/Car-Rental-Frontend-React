import React from 'react'
import Sidebar from '../components/Sidebar'
import './styles/brands.css'
function Brands() {
    return (
        <>
            <Sidebar />
            <div className="content">
                <div class="card brands" style={{ width: "1100px" }}>
                    <div class="card-header">
                        Brands Managment
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brands