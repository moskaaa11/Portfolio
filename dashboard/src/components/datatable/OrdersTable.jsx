import './tableBig.scss'
import { DataGrid} from '@mui/x-data-grid';
import {ordersColumns, ordersRows} from "./data.js"

const OrdersTable = () => {

    
  return (
      <div className='datatable'>
       <DataGrid className='datagrid'
        rows={ordersRows}
        columns={ordersColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        />
    </div>  
  )
}

export default OrdersTable