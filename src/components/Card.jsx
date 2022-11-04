import React from 'react'
import './card.css'

function Card(props) {
    return (
        <div id="root">
            <div class="container mt-4">
                <div class="c-dashboardInfo">
                    <div class="wrap">
                        <h4 class="c-dashboardInfo__title"><i class={ JSON.stringify(props.icon) }></i>{ JSON.stringify(props.title) }</h4><span class="c-dashboardInfo__count">{ JSON.stringify(props.count) }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card