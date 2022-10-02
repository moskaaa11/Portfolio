import {useContext, useState} from 'react';
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import DvrIcon from '@mui/icons-material/Dvr';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"
import {DarkModeContex} from '../../context/darkModeContext'
import SegmentIcon from '@mui/icons-material/Segment';


const Sidebar = () => {

    const [open, setOpen]=useState(false);

    const  {dispatch} = useContext (DarkModeContex)

  return (

    <div className='sidebarWrapper'>
    <div className={open ? 'sidebar active' : 'sidebar'}>
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
        <div className="item" >
            <SegmentIcon className="itemIcon" onClick={() => setOpen(!open)}/>
        </div>
    </div>
  )
}

export default Sidebar