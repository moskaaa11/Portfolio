import './table.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {userColumns, userRows} from "./data.js"
import {Link} from "react-router-dom"

const UserTable = () => {

    const actionColumn = [
        {
            field: 'action' ,
            headerName: 'Action',
            flex: 2,
            renderCell: () => {
                return (
                    <div className='cellAction'>
                      <Link to="/users/test" className='link'>
                        <div className='viewButton'>View</div>
                      </Link>
                        
                    </div>
                )
            }
        }
    ]
  return (
      <div className='datatable'>
        <div className="datatableTitle">
          <h2 className="title">Add New User</h2>
          <Link to="/users/new" className='button'>
            <p className='buttonText'>
              Add new
            </p>
          </Link>
        </div>
       <DataGrid className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        />
    </div>  
  )
}

export default UserTable