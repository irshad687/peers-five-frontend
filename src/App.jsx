import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/Users/UserList';
import UserForm from './components/Users/UserForm';
import P5History from './components/Rewards/P5History';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/new" element={<UserForm />} />
                    <Route path="/:id" element={<UserForm />} />
                    <Route path="/:id/p5" element={<P5History />} />
                    <Route path="/:id/rewards" element={<P5History />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
