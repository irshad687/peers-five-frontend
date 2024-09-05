import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserRow = ({ user, index }) => {
    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate(`/${user._id}`); 
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.p5Balance}</td>
            <td>{user.rewardBalance}</td>
            <td><button onClick={handleEditClick}>Edit</button></td>
        </tr>
    );
};

export default UserRow;
