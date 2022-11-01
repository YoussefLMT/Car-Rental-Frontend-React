import React from 'react'
import { AiFillDashboard } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';

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
    <div>Sidebar</div>
  )
}

export default Sidebar