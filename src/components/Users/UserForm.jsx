import React, { useState, useEffect } from 'react';
import { createUser, getUserById, updateUser } from '../../apis';
import { useNavigate, useParams } from 'react-router-dom'; 

const UserForm = () => {
    const [name, setName] = useState('');
    const [p5Balance, setP5Balance] = useState(0);
    const [rewardBalance, setRewardBalance] = useState(0);
    const navigate = useNavigate(); 
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchUser = async () => {
                try {
                    const user = await getUserById(id);
                    setName(user.name);
                    setP5Balance(user.p5Balance);
                    setRewardBalance(user.rewardBalance);
                } catch (error) {
                    console.error('Error fetching user:', error);
                }
            };
            fetchUser();
        }
    }, [id]);

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await updateUser(id, { name });
            } else {
                await createUser({ name });
            }
            navigate('/'); 
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };

    const handleP5Click = () => {
        navigate(`/${id}/p5`);  
    };

    const handleRewardClick = () => {
        navigate(`/${id}/rewards`); 
    };

    const handleCancel = () => {
        navigate('/'); 
    };

    return (
        <div>
            <h1>{id ? 'Edit User' : 'Create New User'}</h1>
            <form onSubmit={handleSave}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                {id && (
                    <div>
                        <button type="button" onClick={handleP5Click}>
                            P5 Balance: {p5Balance}
                        </button>
                        <button type="button" onClick={handleRewardClick}>
                            Reward Balance: {rewardBalance}
                        </button>
                    </div>
                )}
                <div>
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
