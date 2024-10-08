import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaUserCircle,FaPhone,FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const User = () => {
    const { id } = useParams();
    const [user, setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id).then(res=>{
            // console.log(res);
            setUser(res.data);
            setLoading(false);
        })
    }, [id]);



    return (
        <div className='userWrap'>
            <h1>User</h1>
            <div className="detail">
                {
                    loading ? (<div className='loading'>로딩중...</div>) : (<div className='userDetail'>
                        <p><span><FaUserCircle /></span> {user.name}</p>
                        <p><span><FaPhone /></span> {user.phone}</p>
                        <p><span><MdEmail /></span> {user.email}</p>
                        <p><span><FaAddressCard /></span> {user.address.street}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default User;