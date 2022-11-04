import React from 'react'
import axiosInstance from '../axios';

function ReservationsTable(props) {

    const deleteReservation = async (e, id) => {
        const deleteBtn = e.currentTarget;
        try {
            await axiosInstance.delete(`/delete-reservation/${id}`)
            deleteBtn.closest('tr').remove();
        } catch (error) {
            console.log(error)
        }
    }


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
                                <td>
                                    <button type="button" onClick={(e) => deleteReservation(e, reservation.id)} class="btn btn-danger">Delete</button>
                                    <Link className="btn btn-warning" to={`update-reservation/${reservation.id}`}>Update</Link>              
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table >
    )
}

export default ReservationsTable