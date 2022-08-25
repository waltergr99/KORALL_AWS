import Products from "../../Productos"
import { connect } from 'react-redux'
import { fetchAllCoasterFromAWS  } from "../../redux/actions/product" 
import { useEffect } from "react"

const mapStateToProps = state =>({})
const actionsRedux = {
    fetchAllCoasterFromAWS
}

const ProductPage = ({ fetchAllCoasterFromAWS }) =>{
    useEffect(()=>{
        fetchAllCoasterFromAWS()
    },[fetchAllCoasterFromAWS])
    return(
        <Products/>
    )
}

export default connect(mapStateToProps, actionsRedux)(ProductPage)