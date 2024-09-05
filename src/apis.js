import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users`, userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const getUserById = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

export const updateUser = async (userId, userData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
        await axios.delete(`${API_BASE_URL}/users/${userId}`);
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

export const getp5History = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/rewards/${userId}/p5`);
        return response.data;
    } catch (error) {
        console.error('Error fetching p5 history:', error);
        throw error;
    }
};
