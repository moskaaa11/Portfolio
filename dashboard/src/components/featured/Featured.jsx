import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h2 className='title'>Total Revenue</h2>
        <MoreVertOutlinedIcon className='icon' />
      </div>
      <div className="bottom">
        <CircularProgressbar 
          className='graph'
          value={70} 
          text={"70%"} 
          strokeWidth={3}
        />
        <p className='title'>Total sales made today</p>
        <p className='amount'>$420</p>
        <p className='desc'>
          Previous transactions processing. Last payments may not be included.
        </p>
      </div>
    </div>
  )
}

export default Featured