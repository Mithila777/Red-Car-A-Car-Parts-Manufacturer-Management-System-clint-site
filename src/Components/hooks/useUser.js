import { useEffect, useState } from "react";

const useUser=()=>{

    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users', {
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
        .then(data=>setUsers(data))
    },[]);
    return  [users,setUsers];
}
export default useUser;