import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 18yTUMuUvWn5YN6AptP09JlJ47ULueyDUnPZDbtDrr4'
  }
});
