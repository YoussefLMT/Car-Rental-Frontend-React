import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios'
import Sidebar from '../components/Sidebar'

function Dashboard() {

  const [carsCount, setCarsCount] = useState({})
  const [usersCount, setUsersCount] = useState({})
  const [reservationsCount, setReservationsCount] = useState({})
  const [income, setIncome] = useState({})


  const getTotalCount = async () => {
    const response = await axiosInstance.get('/statistics')
    setCarsCount(response.data.carsCount)
    setUsersCount(response.data.usersCount)
    setReservationsCount(response.data.reservationsCount)
    setIncome(response.data.income)
  }

  useEffect(() => {
    getTotalCount()
  }, [])

  return (
    <>
      <Sidebar />
      <div className="content">
        <h1>Dashboard</h1>
      </div>
    </>
  )
}

export default Dashboard