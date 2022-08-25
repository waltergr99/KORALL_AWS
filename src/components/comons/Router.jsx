import { Route, Routes } from 'react-router-dom'
import CreateUser from '../CreateUser'
import Forgot from '../Forgot'
import Login from '../Login'
import NotFound from '../NotFound'
import CoasterDetailPage from '../pages/CoasterDetailPage'
import ProductPage from '../pages/ProductPage'

const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />}> </Route>
      <Route path="forgot" element={<Forgot />}> </Route>
      <Route path="createuser" element={<CreateUser />}> </Route>
      <Route path="*" element={<NotFound />}> </Route>
      <Route index path='' element={<ProductPage />}> </Route>
      <Route exact path='/coaster/:id' element={<CoasterDetailPage />}> </Route>
    </Routes>
  )
}


export default Router