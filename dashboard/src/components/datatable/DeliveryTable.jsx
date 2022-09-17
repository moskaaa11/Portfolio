import './table.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {deliveryColumns, deliveryRows} from "./data.js"

const DeliveryTable = () => {

    
  return (
      <div className='datatable'>
       <DataGrid className='datagrid'
        rows={deliveryRows}
        columns={deliveryColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        />
    </div>  
  )
}

export default DeliveryTable