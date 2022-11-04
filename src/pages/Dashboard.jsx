import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'

function Dashboard() {

  const [carsCount, setCarsCount] = useState(0)
  const [usersCount, setUsersCount] = useState(0)
  const [reservationsCount, setReservationsCount] = useState(0)
  const [income, setIncome] = useState(0)


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
        <div class="row">
          <div class="col-md-3">
            <Card icon="fa-solid fa-car" title='Cars' count={carsCount} />
          </div>
          <div class="col-md-3">
            <Card icon="fa-solid fa-calendar-days" title="Reservations" count={reservationsCount} />
          </div>
          <div class="col-md-3">
            <Card icon="fa-solid fa-users" title="Users" count={usersCount} />
          </div>
          <div class="col-md-3">
            <Card icon="fa-solid fa-dollar-sign" title="Income" count={income} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard