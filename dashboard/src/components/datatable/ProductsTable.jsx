import './table.scss'
import { DataGrid} from '@mui/x-data-grid';
import {productsColumns, productsRows} from "./data.js"

const ProductsTable = () => {

    
  return (
      <div className='datatable'>
       <DataGrid className='datagrid'
        rows={productsRows}
        columns={productsColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        />
    </div>  
  )
}

export default ProductsTable