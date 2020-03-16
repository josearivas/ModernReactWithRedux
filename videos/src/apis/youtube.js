import axios from 'axios';

const KEY = 'AIzaSyBOfR5gqTHdLPT-RiQg1u4sA86Ep0iKjs0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       type: 'video',
       maxResults: 5,
       key: KEY
   } 
});