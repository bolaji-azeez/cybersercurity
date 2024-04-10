
import Header from '../block/Header'
import { Outlet } from 'react-router-dom'



const WebLayout = () => {
  return (
    <div className='"overflow-hidden'>
        <Header />
        <Outlet />
      
    </div>
  )
}

export default WebLayout
