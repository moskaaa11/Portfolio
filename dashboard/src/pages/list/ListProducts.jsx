import "./list.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import ProductsTable from "../../components/datatable/ProductsTable"

const ListProducts = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar/>
        <ProductsTable/>
      </div>
    </div>
  )
}

export default ListProducts