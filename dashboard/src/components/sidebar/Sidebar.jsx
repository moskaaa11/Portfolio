import {useContext} from 'react';
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import DvrIcon from '@mui/icons-material/Dvr';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"
import {DarkModeContex} from '../../context/darkModeContext'


const Sidebar = () => {

    const  {dispatch} = useContext (DarkModeContex)

  return (
    <div className="sidebar">
        <header className="header">
            <span className="logo">Sales board</span>
        </header>
        <div className="line"></div>
        <main className="main">
            <ul>
                <p className="title">MAIN</p>
                <Link to='/' className="link" >
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to='/users' className="link">
                    <li>
                        <PeopleIcon className="icon"/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to='/products' className="link">
                    <li>
                        <InventoryIcon className="icon"/>
                        <span>Products</span>
                    </li>
                </Link>
                <Link to='/orders' className="link">
                    <li>
                        <DvrIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                </Link>
                <Link to='/delivery' className="link">  
                <li>
                    <LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                </Link>
                <p className="title">LINKS</p>
                <Link to='/stats' className="link">
                <li>
                    <StackedLineChartIcon className="icon"/>
                    <span>Stats</span>
                </li>
                </Link>
                <Link to='/notes' className="link">
                <li>
                    <NotificationsNoneIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                </Link>
                <li>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </main>
        <footer className="footer">
            <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
        </footer>
    </div>
  )
}

export default Sidebar