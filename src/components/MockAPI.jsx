import axios from "axios"

const MockAPI = axios.create({
    baseURL:"https://6b00bd8d1c637a569e5282a8.mockapi.io"
})

export default MockAPI