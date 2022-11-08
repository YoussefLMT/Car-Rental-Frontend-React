import React from 'react'
import { AiFillDashboard, AiFillCar } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { FaCarSide, FaCalendarAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './sidebar.css';

const sidebarData = [
    {
        path: "/dashboard",
        name: "dashboard",
        icon: <AiFillDashboard />,
    },
    {
        path: "/brands",
        name: "brands",
        icon: <FaCarSide />,
    },
    {
        path: "/cars",
        name: "cars",
        icon: <AiFillCar />,
    },
    {
        path: "/reservations",
        name: "reservations",
        icon: <FaCalendarAlt />,
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
                        <NavLink to={data.path} key={data.name} className="link">
                            <div className="icon">
                                {data.icon}
                            </div>

                            <div className="text">
                                {data.name}
                            </div>
                        </NavLink>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Sidebar