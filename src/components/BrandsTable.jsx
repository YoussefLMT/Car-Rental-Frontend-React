import React from 'react'

function BrandsTable(props) {
    return (
        <table class="table">
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
                                </tr>
                            )
                        })
                }
            </tbody>
        </table>
    )
}

export default BrandsTable