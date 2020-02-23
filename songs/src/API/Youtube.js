import axios from 'axios';

const KEY = 'AIzaSyB0NeKjCw7imbEVcBXGipd_g1n4PU6XRqc';
// 'AIzaSyCESu55UdSNFo3rlGu7V2iWpwZTKb6DtZU'; imatom
// 'AIzaSyDHrEJ4SLaQdqmY84jwoX1hPgrr54G-mN4'; sanjoy.k

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 25,
        key: KEY
    }
})
