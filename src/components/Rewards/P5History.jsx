import React, { useState, useEffect } from 'react';
import {getUserById, getp5History } from '../../apis';
import { useParams, useNavigate } from 'react-router-dom'; 

const P5History = () => {
    const { id } = useParams();
    const [p5History, setP5History] = useState([]);
    const [p5Balance, setP5Balance] = useState(0);
    const navigate = useNavigate();  

    useEffect(() => {
        const fetchUserP5History = async () => {
            try {
                const user = await getUserById(id);
                setP5Balance(user.p5Balance);
                const p5History = await getp5History(id);
                setP5History(p5History);
            } catch (error) {
                console.error('Error fetching P5 history:', error);
            }
        };
        fetchUserP5History();
    }, [id]);

    const handleNewRewardClick = () => {
        navigate(`/${id}/rewards/new`);  
    };

    return (
        <div>
            <h1>P5 History</h1>
            <button onClick={handleNewRewardClick}>Create New Reward</button>
            <div>
                <h3>P5 Balance: {p5Balance}</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date-Time</th>
                        <th>P5 Given</th>
                        <th>User Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {p5History.map((record, index) => (
                        <tr key={record._id}>
                            <td>{index + 1}</td>
                            <td>{new Date(record.date).toLocaleString()}</td>
                            <td>{record.points}</td>
                            <td>{record.givenTo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default P5History;
