import "./navbar.scss"
import {useContext, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SegmentIcon from '@mui/icons-material/Segment';
import { borderRadius } from "@mui/system";
import {DarkModeContex} from '../../context/darkModeContext';
import {notesRows} from "../notesList/notesData";
import {messageRows} from "../notesList/message";
import {Link} from "react-router-dom";

const Navbar = () => {


  const  {dispatch} = useContext (DarkModeContex)
  
  const [menuActive, setMenuActive] = useState(false)
  

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="itemIcon"/>
            English
          </div>
          <div className="item" onClick={()=>dispatch({type:"TOGGLE"})}>
            <DarkModeOutlinedIcon className="itemIcon"/>
          </div>
          <div className="item">
            <Link to='/notes' className="link">
              <NotificationsNoneIcon className="itemIcon"/>
              <div className="counter">{notesRows.length}</div>
            </Link>
          </div>
          <div className="item">
            <Link to='/notes' className="link">
              <ChatBubbleOutlineIcon className="itemIcon"/>
              <div className="counter">{messageRows.length}</div>
            </Link>
          </div>
          <div className="item">
            <img className="photo" src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" alt="profile_photo" width={30}/>
          </div>
          <div className="item">
            <SegmentIcon className="itemIcon"/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar