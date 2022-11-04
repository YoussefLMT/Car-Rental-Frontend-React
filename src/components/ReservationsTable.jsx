import React from 'react'

function ReservationsTable(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">first name</th>
                    <th scope="col">last name</th>
                    <th scope="col">phone</th>
                    <th scope="col">car</th>
                    <th scope="col">start date</th>
                    <th scope="col">end date</th>
                    <th scope="col">total amount</th>
                    <th scope="col">actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.reservations.map((reservation) => {
                        return (
                            <tr key={reservation.id}>
                                <th scope="row">{reservation.id}</th>
                                <td>{reservation.first_name}</td>
                                <td>{reservation.last_name}</td>
                                <td>{reservation.phone}</td>
                                <td>{reservation.name}</td>
                                <td>{reservation.start_date}</td>
                                <td>{reservation.end_date}</td>
                                <td>{reservation.total_amount}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table >
    )
}

export default ReservationsTable