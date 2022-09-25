import "./single.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

const Single = ({menuActive,setMenuActive}) => {
  return (
    <div className="single">
      <Sidebar active={menuActive} setActive={setMenuActive}/>
      <div className="singleContainer">
        <Navbar/>
        <header className="headerContainer">
          <div className="leftBox">
            <div className="editButton">Edit</div>
            <h2 className="title">Information</h2>
            <div className="item">
              <img 
              src="https://play-lh.googleusercontent.com/CWzqShf8hi-AhV9dUjzsqk2URzdIv8Vk2LmxBzf-Hc8T-oGkLVXe6pMpcXv36ofpvtc" 
              alt="itemImg" 
              className="itemImg" 
              />
              <div className="details">
                <h2 className="itemTitle">Katie White</h2>
                <div className="detailItem">
                  <p className="itemKey">Email:</p>
                  <p className="itemValue">katie@gmail.com</p>
                </div>
                <div className="detailItem">
                  <p className="itemKey">Phone:</p>
                  <p className="itemValue">+38(333)333-33-33</p>
                </div>
                <div className="detailItem">
                  <p className="itemKey">Address:</p>
                  <p className="itemValue">Brooklyn str, 234 Goopy Yd, NY</p>
                </div>
                <div className="detailItem">
                  <p className="itemKey">Country:</p>
                  <p className="itemValue">USA</p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="rightBox">
            <Chart 
            aspect={2/1}
            title='Last year transaction'
            />
          </div>
        </header>
        <footer className="footerConatiner">
        <h2 className="title">Last Transaction</h2>
          <Table/>
        </footer>
      </div>
    </div>
  )
}

export default Single