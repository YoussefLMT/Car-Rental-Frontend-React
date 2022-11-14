import React from 'react'
import { AiFillDashboard, AiFillCar } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { FaCarSide, FaCalendarAlt } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import './sidebar.css';
import axiosInstance from '../axios';
import Swal from 'sweetalert2';

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

const navigate = useNavigate()

const logout = async () => {
    try {
        const response = await axiosInstance.post("/logout")
        if (response.data.status === 200) {
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: response.data.message
            })
            navigate('/')
        }
    } catch (error) {
        console.log(error)
    }
}

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
                    <button onClick={logout} className='btn btn-primary' style={{width: '60%', margin: "320px auto"}}>logout</button>
                </section>
            </div>
        </div>
    )
}

export default Sidebar