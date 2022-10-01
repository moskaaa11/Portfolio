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
        username: "Mike Duglas",
        product: "Iphone SE",
        phone: "+38(091) 531-32-54",
        data: 3,
        status: "allarm",
      },
      {
        id: 3,
        username: "Ketie Perry",
        product: "Iphone 12",
        phone: "+38(091) 444-54-16",
        data: 22,
        status: "normall",
      },
      {
        id: 4,
        username: "Joshua Levingstai",
        product: "Iphone X",
        phone: "+38(091) 124-53-87",
        data: 14,
        status: "warnings",
      },
      {
        id: 5,
        username: "Adam Brown",
        product: "Apple Airpods",
        phone: "+38(091) 167-98-44",
        data: 4,
        status: "allarm",
      },
      {
        id: 6,
        username: "Jerry White",
        product: "Iphone 12",
        phone: "+38(094) 523-67-34",
        data: 14,
        status: "warnings",
      },
      {
        id: 7,
        username: "Mullen Rysh",
        product: "Iphone SE",
        phone: "+38(095) 923-65-76",
        data: 28,
        status: "normall",
      },
      {
        id: 8,
        username: "Garret Paddins",
        product: "Iphone X",
        phone: "+38(091) 112-54-55",
        data: 1,
        status: "allarm",
      },

]