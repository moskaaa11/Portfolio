import "./list.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import UserTable from "../../components/datatable/UserTable"

const ListUsers = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <UserTable/>
      </div>
    </div>
  )
}

export default ListUsers