import React from 'react'
import '../styles/Tech.css'

import { NavLink } from 'react-router-dom'

const Card = (props) => {
    return (
        <>

            <div className="card">
                <h2>{props.title}</h2>
                <img src={props.imgSource} alt="äsdqwe" className="homeImg" />
                <div className="btnBox">
                    <div className="btn">
                        <NavLink to={props.link} className="readMore">{props.btnHome}</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card