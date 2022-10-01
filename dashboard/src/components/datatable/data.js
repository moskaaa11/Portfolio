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
      username: "John Smith",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6em8bBiDFn_p0jcA1n1zoPk1hocoXxCG_w&usqp=CAU",
      email: "jon@gmail.com",
      status: "active",
      age: 41,
    },
    {
      id: 2,
      username: "Mike Duglas",
      avatar:
        "https://digital-photography-school.com/wp-content/uploads/2012/06/Portrait-Photography-Next-Level-04.jpg",
      email: "mike@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 3,
      username: "Ketie Perry",
      avatar:
        "https://i.pinimg.com/originals/93/1b/4a/931b4af252790dca3a868768ac73d730.jpg",
      email: "ket@gmail.com",
      status: "pending",
      age: 24,
    },
    {
      id: 4,
      username: "Joshua Levingstai",
      avatar:
        "https://images.ctfassets.net/u0haasspfa6q/5UyqvlWv1EOyq8IaSGk2el/f0645cd8f2a6d76457682f857d2fb186/alekzan-powell-5t5krHi1LQ8-unsplash",
      email: "josh@gmail.com",
      status: "passive",
      age: 15,
    },
    {
      id: 5,
      username: "Adam Brown",
      avatar:
        "https://www.manningrivertimes.com.au/images/transform/v1/crop/frm/silverstone-feed-data/512aecc8-3720-4c14-844d-29cfd3dbface.jpg/r0_0_800_600_w800_h600_fmax.jpg",
      email: "adam@gmail.com",
      status: "active",
      age: 17,
    },
    {
      id: 6,
      username: "Jerry White",
      avatar:
        "https://media.istockphoto.com/photos/mature-businessman-smiling-over-white-background-picture-id685132245?k=20&m=685132245&s=612x612&w=0&h=oKxgMF_dOhoGJtd_YxhbmpK4qFvcl-0s0NFmxuh7IKA=",
      email: "jon@gmail.com",
      status: "passive",
      age: 34,
    },
    {
      id: 7,
      username: "Mullen Rysh",
      avatar:
        "https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?cs=srgb&dl=pexels-maksim-goncharenok-5611966.jpg&fm=jpg",
      email: "mull@gmail.com",
      status: "active",
      age: 45,
    },
    {
      id: 8,
      username: "Garret Paddins",
      avatar:
        "https://img.freepik.com/premium-photo/front-view-person-with-short-hair_23-2148749599.jpg?w=2000hvdG98ZW58MHx8MHx8&w=1000&q=80",
      email: "gar@gmail.com",
      status: "passive",
      age: 35,
    },
    {
      id: 9,
      username: "Olga Mostarka",
      avatar:
        "https://miro.medium.com/max/1080/1*jWx9suY2k3Ifq4B8A_vz9g.jpeg",
      email: "olga@gmail.com",
      status: "pending",
      age: 18,
    },
    {
      id: 10,
      username: "Marina Kartoshkina",
      avatar:
        "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000",
      email: "mar@gmail.com",
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
      "https://bigmag.ua/image/cache/catalog/new/kumunren/bu%20iphone/iphoneX/sg/A10A9328-500x500.jpg",
    amount: 23,
    status: "available",
    price: "820$",
    description: "Apple iPhone X",
  },
  {
    id: 2,
    products: "Iphone SE",
    avatar:
      "https://media.wired.com/photos/5e9f56f143e5800008514457/1:1/w_1277,h_1277,c_limit/Gear-Feature-Apple_new-iphone-se-white_04152020.jpg",
    amount: 13,
    status: "available",
    price: "1200$",
    description: "Apple iPhone SE ",
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