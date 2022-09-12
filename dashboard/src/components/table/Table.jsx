import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows = [
        {
            id: 11231231,
            name: "John Smith",
            img:
              "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            stock: 123123,
            status: "passive",
            price: "$120.00",
          },
          {
            id: 24322413,
            name: "John Smith",
            img:
              "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            stock: 456123,
            status: "pending",
            price: "$120.00",
          },
          {
            id: 31351623,
            name: "John Smith",
            img:
              "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            stock: 378123,
            status: "passive",
            price: "$120.00",
          },
          {
            id: 41236126,
            name: "John Smith",
            img:
              "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            stock: 147123,
            status: "pending",
            price: "$120.00",
          },
          {
            id: 51236123,
            name: "John Smith",
            img:
              "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            stock: 894123,
            status: "active",
            price: "$120.00",
          },
          {
            id: 61326136,
            name: "John Smith",
            img:
              "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            stock: 260123,
            status: "passive",
            price: "$120.00",
          },
          {
            id: 71236261,
            name: "John Smith",
            img:
              "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            stock: 187123,
            status: "pending",
            price: "$120.00",
          },
    ];

  return (
        <TableContainer className='table' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Stock</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
            <TableCell className='tableCell'>Price</TableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>{row.id} </TableCell>
              <TableCell className='tableCell'>{row.name}</TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                    <img src={row.img} alt="product" className='image'/>
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.stock}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>
                  {row.status}
                </span>
                </TableCell>
              <TableCell className='tableCell'>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List