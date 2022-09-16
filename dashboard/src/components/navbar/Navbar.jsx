import "./navbar.scss"
import {useContext} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SegmentIcon from '@mui/icons-material/Segment';
import { borderRadius } from "@mui/system";
import {DarkModeContex} from '../../context/darkModeContext'

const Navbar = () => {

  const  {dispatch} = useContext (DarkModeContex)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon/>
            English
          </div>
          <div className="item" onClick={()=>dispatch({type:"TOGGLE"})}>
            <DarkModeOutlinedIcon/>
          </div>
          <div className="item">
            <NotificationsNoneIcon/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <img className="photo" src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" alt="profile_photo" width={30}/>
          </div>
          <div className="item">
            <SegmentIcon/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar