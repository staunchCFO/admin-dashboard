import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../../dummyData';
import { Link } from "react-router-dom"

import "./style.css"


const Users = () => {
    const [ data, setData ] = useState(userRows)

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'username', headerName: 'Username', width: 200},
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 200,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params) => {
            return (
                <>  
                    <Link to={"/all-users/"+params.row.id} >
                        <button className="userEdit__btn">Edit</button>
                    </Link>
                    <DeleteOutline 
                        className="userDelete__icon"
                        onClick={() => handleDelete(params.row.id)}
                    />
                </>
            )
          }
        },
      ];

      const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
      };

    return (
        <div className="user">
            <DataGrid 
                rows={data} 
                columns={columns} 
                pageSize={8} 
                checkboxSelection 
                disableSelectionOnClick
            />
        </div>
    )
}

export default Users;
