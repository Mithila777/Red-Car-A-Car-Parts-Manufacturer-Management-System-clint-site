import React from 'react';
import { useQuery } from 'react-query';
import useUser from '../hooks/useUser';
import UserRow from './UserRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Users = () => {
   
    const[users]=useUser([]);
    return (
        <div>
            <h2 className="">All Users: {users.length}</h2>
            <div className='' >
            <div class="overflow-x-auto">
      <Table>
                        <tr>
                      <th align="center">Email</th>
                      <th align="center"> Make Admin</th>
                       <th align="center"> Remove user</th>
                        </tr>
                        <TableBody>
                       {
                           users.map(user=><UserRow
                           key={user._id}
                           user={user}
                           ></UserRow>)
                       }
                     </TableBody>

                    </Table>
                 </div> 
                 </div>            
           
        </div>
    );
};

export default Users;