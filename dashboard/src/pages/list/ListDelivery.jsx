import "./list.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DeliveryTable from "../../components/datatable/DeliveryTable"

const ListDelivery = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DeliveryTable/>
      </div>
    </div>
  )
}

export default ListDelivery