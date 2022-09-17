export const notesColumns =[
    { field: 'id', headerName: 'ID', flex:1 },
    { field:'username' , headerName: 'Username', flex:1},
    { field:'product' , headerName: 'Product', flex:1},
    { field:'phone' , headerName: 'Phone', flex:2},
    { field:'data' , headerName: 'Estimated data', flex:1, renderCell:(params) =>{
      return (
          <div className={`${params.row.status}`}>
              {params.row.data}
          </div>
      )}
    }
];

export const notesRows = [
    {
      id: 1,
      username: "Jon Snow",
      product: "Iphone X",
      phone: "+38(094) 123-12-31",
      data: 14,
      status: "warnings",
    },
    {
        id: 2,
        username: "Jon Snow",
        product: "Iphone X",
        phone: "+38(094) 123-12-31",
        data: 3,
        status: "allarm",
      },
      {
        id: 3,
        username: "Jon Snow",
        product: "Iphone X",
        phone: "+38(094) 123-12-31",
        data: 22,
        status: "normall",
      },
      {
        id: 4,
        username: "Jon Snow",
        product: "Iphone X",
        phone: "+38(094) 123-12-31",
        data: 14,
        status: "warnings",
      },
      {
        id: 5,
        username: "Jon Snow",
        product: "Iphone X",
        phone: "+38(094) 123-12-31",
        data: 4,
        status: "allarm",
      },
      {
        id: 6,
        username: "Jon Snow",
        product: "Iphone X",
        phone: "+38(094) 123-12-31",
        data: 14,
        status: "warnings",
      },
      {
        id: 7,
        username: "Jon Snow",
        product: "Iphone X",
        phone: "+38(094) 123-12-31",
        data: 28,
        status: "normall",
      },
      {
        id: 8,
        username: "Jon Snow",
        product: "Iphone X",
        phone: "+38(094) 123-12-31",
        data: 1,
        status: "allarm",
      },

]