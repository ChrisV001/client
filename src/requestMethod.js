import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTUwMzA1ZGViOWJmNTc2NmViNzE4YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mjg5NjM4OSwiZXhwIjoxNjkzMTU1NTg5fQ.w5DC9EsLO-Nm0JP9bC0EyOUafJT4FFvo4p3oZqkn0q4";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})