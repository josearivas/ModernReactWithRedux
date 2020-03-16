import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kiPcdv6O36T-V-j15IUUHAF0TMdDr_LDU2BXZjpM368'
    }    
});