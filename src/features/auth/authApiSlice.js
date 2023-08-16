import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// user registration
export const createUser = createAsyncThunk("auth/createUser", async(data) => {
    try {
        const response = await axios.post(`http://localhost:8080/api/v1/auth/register`, data,{
            withCredentials: true
        })

        return response.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})


// user registration
export const loginUser = createAsyncThunk("auth/loginUser", async(data) => {
    try {
        const response = await axios.post(`http://localhost:8080/api/v1/auth/login`, data, {
            withCredentials: true
        })

        return response.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})


// user log out
export const logoutUser = createAsyncThunk("auth/logoutUser", async() => {
    try {
        const response = await axios.post(`http://localhost:8080/api/v1/auth/logout`, "", {
            withCredentials: true
        })

        return response.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})


// Get logged in user
export const getLoggedInUser = createAsyncThunk("auth/getLoggedInUser", async() => {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/auth/me`, {
            withCredentials: true
        })

        return response.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})