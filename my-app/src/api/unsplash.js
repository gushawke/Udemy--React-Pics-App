import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kJ3EhRdu9HhUXvihD51n-LEU0ratlGex7V6D8vGeGVI'
   }
})