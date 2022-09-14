import "./new.scss"
import { useState } from "react";
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const New = () => {

  const [file, setFile]= useState ('');
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <header className="headerContainer">
          <h2 className="newTitle">Add New User</h2>
        </header>
        <footer className="footerContainer">
          <div className="leftBox">
            <img 
            className="footerImg" 
            src={file
            ? URL.createObjectURL(file)
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
          } 
            alt="no image" />
          </div>
          <div className="rightBox">
            <form className="form">
            <div className="formInput">
                <label htmlFor="file" >
                  Image: <CloudUploadIcon className="icon"/>
                </label>
                <input 
                type="file" 
                id="file" 
                onChange={(e)=>setFile(e.target.files[0])}
                style={{display:'none'}}/>
              </div>
              <div className="formInput">
                <label >Username</label>
                <input type="text"  placeholder="john_doe"/>
              </div>
              <div className="formInput">
                <label >Name and surname </label>
                <input type="text"  placeholder="John Doe"/>
              </div>
              <div className="formInput">
                <label >Email</label>
                <input type="email"  placeholder="john@gmail.com"/>
              </div>
              <div className="formInput">
                <label >Phone</label>
                <input type="text"  placeholder="+38(091)123-12-12"/>
              </div>
              <div className="formInput">
                <label >Password</label>
                <input type="password"/>
              </div>
              <div className="formInput">
                <label >Adress</label>
                <input type="text"  placeholder="Brooklyn str, 234 Goopy Yd, NY"/>
              </div>
              <div className="formInput">
                <label >Country</label>
                <input type="text"  placeholder="USA"/>
              </div>
              <button>Send</button>
            </form>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default New