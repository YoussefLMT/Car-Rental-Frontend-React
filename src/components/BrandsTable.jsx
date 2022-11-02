import React from 'react'
import axiosInstance from '../axios'

function BrandsTable(props) {

    const deleteBrand = async (e, id) => {
        const deleteBtn = e.currentTarget;
        try {
            await axiosInstance.delete(`/delete-brand/${id}`)
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
                    <th scope="col">name</th>
                    <th scope="col">actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.brands.map((brand) => {
                        return (
                            <tr key={brand.id}>
                                <th scope="row">{brand.id}</th>
                                <td>{brand.name}</td>
                                <td>
                                    <button type="button" onClick={(e) => deleteBrand(e, brand.id)} class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table >
    )
}

export default BrandsTable