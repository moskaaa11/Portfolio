import "./list.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import OrdersTable from "../../components/datatable/OrdersTable"

const ListOrders = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <OrdersTable/>
      </div>
    </div>
  )
}

export default ListOrders