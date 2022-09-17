import './noteslist.scss'
import { DataGrid} from '@mui/x-data-grid';
import {notesColumns, notesRows} from "./notesData.js"

const NotesList = () => {

    
    
  return (
    <div className='noteslist'>
        <DataGrid className='datagrid'
        rows={notesRows}
        columns={notesColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        />
    </div>
  )
}

export default NotesList