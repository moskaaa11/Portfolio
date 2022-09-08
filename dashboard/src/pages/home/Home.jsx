import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widjet from '../../components/widget/Widjet'
import Chart  from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import List from '../../components/table/Table'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='homeContainer'>
          <Navbar/>
          <header className='header header__container'>
            <Widjet type="user"/>
            <Widjet type="order"/>
            <Widjet type="earnings"/>
            <Widjet type="balance"/>
          </header>
          <main className='main main__container'>
            <Featured/>
            <Chart/>
          </main>
          <footer className='footer footer__container'>
            <div className="box">
              <h2 className='title'>Lates transaction</h2>
              <List/>
            </div>
          </footer>
        </div>
    </div>
  )
}

export default Home