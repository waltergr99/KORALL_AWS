import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCoasterByID } from '../../redux/actions/product'
import { useParams } from 'react-router-dom'
import CoasterDetails from '../../CoasterDetails'
import './pages.css'

const mapStateToProps = state => ({})

const actionsRedux = {
    getCoasterByID
}

const CoasterDetailPage = ({ getCoasterByID }) => {
    const { id } = useParams()
    useEffect(()=>{
       getCoasterByID(id)
    },[id, getCoasterByID])

    return (
        <div className='coaster-detail-container'>
         <CoasterDetails/>
        </div>
    )
}

export default connect(mapStateToProps, actionsRedux)(CoasterDetailPage)