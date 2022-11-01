import React from 'react'
import { AiFillDashboard } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './sidebar.css';

const sidebarData = [
    {
        path: "/dashboard",
        name: "dashboard",
        icon: <AiFillDashboard />,
    },

    {
        path: "/users",
        name: "users",
        icon: <FiUsers />,
    },
];

function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <section className="routes">
                    {sidebarData.map((data) => (
                        <Link to={data.path} key={data.name} className="link">
                            <div className="icon">
                                {data.icon}
                            </div>

                            <div className="text">
                                {data.name}
                            </div>
                        </Link>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Sidebar