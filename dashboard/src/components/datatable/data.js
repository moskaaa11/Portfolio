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
// user data
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