
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' 
import './productos.css'

const mapStateToProps  = state =>({
    coasters_fr: state.products.coasters
})

const actionsRedux = {
}

const Products = ({ coasters_fr }) => {

    const [coasters, setCoasters] = useState([])

    useEffect(() => {
        setCoasters(coasters_fr)
    }, [coasters_fr])

    return (
        <main>
            <h1 className='content-title'>Listado de Productos</h1>
            <hr className='separator' />
            <div className="coasters-container">
                <div className="cards">
                    {coasters.map(coaster => {
                        return (
                            <Link to={`/coaster/${coaster.id}`} key={coaster.id} className="card">
                                <div className="card_image_container">
                                    <img src={coaster.imageUrl} alt="coaster_img" />
                                </div>
                                <div className="card_content">
                                    <p className='card_title'>{coaster.title}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default connect(mapStateToProps, actionsRedux)(Products)