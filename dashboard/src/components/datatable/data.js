// user data
export const userColumns =[
    { field: 'id', headerName: 'ID', flex:1 },
    {field: 'users', headerName:'User', flex:5, renderCell:(params) =>{
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.avatar} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        }
    },
    {field:'email' , headerName: 'Email', flex:5},
    {field:'age' , headerName: 'Age', flex:1},
    {field:'status' , headerName: 'Status', flex:2, renderCell : (params) =>{
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    }
]

export const userRows = [
    {
      id: 1,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      age: 41,
    },
    {
      id: 2,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 3,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "pending",
      age: 24,
    },
    {
      id: 4,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "passive",
      age: 15,
    },
    {
      id: 5,
      username: "Jon Snow",
      avatar:
        "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
      email: "jon@gmail.com",
      status: "active",
      age: 17,
    },
    {
      id: 6,
      username: "Jon Snow",
      avatar:
        "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
      email: "jon@gmail.com",
      status: "passive",
      age: 34,
    },
    {
      id: 7,
      username: "Jon Snow",
      avatar:
        "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
      email: "jon@gmail.com",
      status: "active",
      age: 45,
    },
    {
      id: 8,
      username: "Jon Snow",
      avatar:
        "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
      email: "jon@gmail.com",
      status: "passive",
      age: 35,
    },
    {
      id: 9,
      username: "Jon Snow",
      avatar:
        "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
      email: "jon@gmail.com",
      status: "pending",
      age: 18,
    },
    {
      id: 10,
      username: "Jon Snow",
      avatar:
        "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
      email: "jon@gmail.com",
      status: "active",
      age: 54,
    },
  ];

// products data

export const productsColumns =[
  { field: 'id', headerName: 'ID', flex:1 },
  { field: 'products', headerName:'Products', flex:1, renderCell:(params) =>{
          return (
              <div className="cellWithImg">
                  <img className="cellImg" src={params.row.avatar} alt="avatar"/>
                  {params.row.username}
              </div>
          )
      }
  },
  { field: 'description', headerName: 'Description', flex:5 },
  { field:'amount' , headerName: 'Amount', flex:1},
  { field:'price' , headerName: 'Price', flex:1},
  { field:'status' , headerName: 'Status', flex:2, renderCell : (params) =>{
          return (
              <div className={`cellWithStatus ${params.row.status}`}>
                  {params.row.status}
              </div>
          )
      }
  }
]

export const productsRows = [
  {
    id: 1,
    products: "Iphone X",
    avatar:
      "https://phonesdata.com/files/models/Apple-iPhone-X-518.jpg",
    amount: 23,
    status: "available",
    price: "410$",
    description: "Apple iPhone X – воплощение лучших инновационных решений ",
  },
  {
    id: 2,
    products: "Iphone X",
    avatar:
      "https://phonesdata.com/files/models/Apple-iPhone-X-518.jpg",
    amount: 13,
    status: "available",
    price: "410$",
    description: "Apple iPhone X – воплощение лучших инновационных решений ",
  },
  {
    id: 3,
    products: "Iphone X",
    avatar:
      "https://phonesdata.com/files/models/Apple-iPhone-X-518.jpg",
    amount: 0,
    status: "none",
    price: "410$",
    description: "Apple iPhone X – воплощение лучших инновационных решений ",
  },
  {
    id: 4,
    products: "Iphone X",
    avatar:
      "https://phonesdata.com/files/models/Apple-iPhone-X-518.jpg",
    amount: 28,
    status: "available",
    price: "410$",
    description: "Apple iPhone X – воплощение лучших инновационных решений ",
  },
  {
    id: 5,
    products: "Iphone X",
    avatar:
      "https://phonesdata.com/files/models/Apple-iPhone-X-518.jpg",
    amount: 124,
    status: "available",
    price: "410$",
    description: "Apple iPhone X – воплощение лучших инновационных решений ",
  },
  {
    id: 6,
    products: "Iphone X",
    avatar:
      "https://phonesdata.com/files/models/Apple-iPhone-X-518.jpg",
    amount: 0,
    status: "none",
    price: "410$",
    description: "Apple iPhone X – воплощение лучших инновационных решений ",
  },
  {
    id: 7,
    products: "Iphone X",
    avatar:
      "https://phonesdata.com/files/models/Apple-iPhone-X-518.jpg",
    amount: 76,
    status: "available",
    price: "410$",
    description: "Apple iPhone X – воплощение лучших инновационных решений ",
  },
  {
    id: 8,
    products: "Iphone X",
    avatar:
      "https://phonesdata.com/files/models/Apple-iPhone-X-518.jpg",
    amount: 0,
    status: "none",
    price: "410$",
    description: "Apple iPhone X – воплощение лучших инновационных решений ",
  },
  {
    id: 9,
    products: "Iphone X",
    avatar:
      "https://phonesdata.com/files/models/Apple-iPhone-X-518.jpg",
    amount: 0,
    status: "none",
    price: "410$",
    description: "Apple iPhone X – воплощение лучших инновационных решений ",
  },
  {
    id: 10,
    products: "Iphone X",
    avatar:
      "https://phonesdata.com/files/models/Apple-iPhone-X-518.jpg",
    amount: 89,
    status: "available",
    price: "410$",
    description: "Apple iPhone X – воплощение лучших инновационных решений ",
  },
];

// orders data

export const ordersColumns =[
  { field: 'id', headerName: 'ID', flex:1 },
  {field: 'users', headerName:'User', flex:5, renderCell:(params) =>{
          return (
              <div className="cellWithImg">
                  <img className="cellImg" src={params.row.avatar} alt="avatar"/>
                  {params.row.username}
              </div>
          )
      }
  },
  {field:'products' , headerName: 'Products', flex:5},
  {field:'bill' , headerName: 'Bill', flex:5},
  {field:'status' , headerName: 'Status', flex:2, renderCell : (params) =>{
          return (
              <div className={`cellWithStatus ${params.row.status}`}>
                  {params.row.status}
              </div>
          )
      }
  }
]

export const ordersRows = [
  {
    id: 1,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    products: "Iphone X",
    status: "on-road",
    bill: "1230$"
  },
  {
    id: 2,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    products: "Iphone X",
    status: "on-road",
    bill: "1230$"
  },
  {
    id: 3,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    products: "Iphone X",
    status: "done",
    bill: "1230$"
  },
  {
    id: 4,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    products: "Iphone X",
    status: "canceled",
    bill: "1230$"
  },
  {
    id: 5,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    products: "Iphone X",
    status: "done",
    bill: "1230$"
  },
  {
    id: 6,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    products: "Iphone X",
    status: "canceled",
    bill: "1230$"
  },
  {
    id: 7,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    products: "Iphone X",
    status: "canceled",
    bill: "1230$"
  },
  {
    id: 8,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    products: "Iphone X",
    status: "done",
    bill: "1230$"
  },
  {
    id: 9,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    products: "Iphone X",
    status: "done",
    bill: "1230$"
  },
  {
    id: 10,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    products: "Iphone X",
    status: "done",
    bill: "1230$"
  },
];

//delivery data

export const deliveryColumns =[
  { field: 'id', headerName: 'ID', flex:1 },
  {field: 'users', headerName:'User', flex:5, renderCell:(params) =>{
          return (
              <div className="cellWithImg">
                  <img className="cellImg" src={params.row.avatar} alt="avatar"/>
                  {params.row.username}
              </div>
          )
      }
  },
  {field:'tracking' , headerName: 'Tracking', flex:5},
  {field:'manager' , headerName: 'Manager', flex:2},
  {field:'company' , headerName: 'Company', flex:2},
  {field:'status' , headerName: 'Status', flex:2, renderCell : (params) =>{
          return (
              <div className={`cellWithStatus ${params.row.status}`}>
                  {params.row.status}
              </div>
          )
      }
  }
]

export const deliveryRows = [
  {
    id: 1,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    manager: "Kettie",
    status: "on-road",
    company: "UkrPochta",
    tracking: "2312029421",
  },
  {
    id: 2,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    manager: "Kettie",
    status: "on-road",
    company: "UkrPochta",
    tracking: "2312245352",
  },
  {
    id: 3,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    manager: "Kettie",
    status: "done",
    company: "UkrPochta",
    tracking: "4512223452",
  },
  {
    id: 4,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    manager: "Jhon",
    status: "canceled",
    company: "NovaPochta",
    tracking: "2398236552",
  },
  {
    id: 5,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    manager: "Kettie",
    status: "done",
    company: "NovaPochta",
    tracking: "4789245352",
  },
  {
    id: 6,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    manager: "Kettie",
    status: "canceled",
    company: "UkrPochta",
    tracking: "3278245352",
  },
  {
    id: 7,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    manager: "Jhon",
    status: "canceled",
    company: "UkrPochta",
    tracking: "0976545352",
  },
  {
    id: 8,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    manager: "Jhon",
    status: "done",
    company: "NovaPochta",
    tracking: 4535276564,
  },
  {
    id: 9,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    manager: "Kettie",
    status: "done",
    company: "NovaPochta",
    tracking: 9865245352,
  },
  {
    id: 10,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    manager: "Jhon",
    status: "done",
    company: "NovaPochta",
    tracking: 7836445352,
  },
];