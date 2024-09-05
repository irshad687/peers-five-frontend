import React, { useState, useEffect } from 'react';
import { getUsers } from '../../apis';
import UserRow from './UserRow';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleNewUserClick = () => {
        navigate('/new'); 
    };

    return (
        <div>
            <h1>Users List</h1>
            <button onClick={handleNewUserClick}>Create New User</button>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>P5 Balance</th>
                        <th>Reward Balance</th>
                        <th>Login</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <UserRow key={user._id} user={user} index={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
