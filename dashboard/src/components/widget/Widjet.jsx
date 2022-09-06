import './widjet.scss'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widjet = ({type}) => {

    let data;

    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data={
                title:"USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonOutlineOutlinedIcon className='icon'/>
                )
            };
        break;
        case "order":
            data={
                title:"ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <DvrOutlinedIcon className='icon'/>
                )
            };
        break;
        case "earnings":
            data={
                title:"EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <PointOfSaleOutlinedIcon className='icon'/>
                )
            };
        break;
        case "balance":
            data={
                title:"BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <MonetizationOnOutlinedIcon className='icon'/>
                )
            };
        break;
        default:
            break;
    }

  return (
    <div className='container'>
        <div className="widjet">
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className='counter'>
                    {data.isMoney && "$"} {amount}
                    </span>
                <span className='link'>{data.link}</span>
            </div>
            <div className="right">
                <div className="percent positive">
                    <ArrowUpwardOutlinedIcon/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    </div>
  )
}

export default Widjet