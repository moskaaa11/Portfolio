import './datatable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {userColumns, userRows} from "./data.js"

const DataTable = () => {

    const actionColumn = [
        {
            field: 'action' ,
            headerName: 'Action',
            flex: 2,
            renderCell: () => {
                return (
                    <div className='cellAction'>
                        <div className='viewButton'>View</div>
                    </div>
                )
            }
        }
    ]
  return (
    <div className='datatable'>
       <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable