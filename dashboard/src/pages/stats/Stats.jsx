import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart  from '../../components/chart/Chart'
import './stats.scss'

const Stats = () => {


  return (
    <div className='stats'>
        <Sidebar/>
        <div className="statsContainer">
            <Navbar/>
            <Chart
            aspect={2/1}
            title='Last year sales'
            />
        </div>
    </div>
  )
}

export default Stats