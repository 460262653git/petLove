const HOST = 'http://localhost:3500';

export function get(url) {
    return fetch(HOST+url,{
        method:'GET',
        credentials:'include',
        headers:{
            'Accept':'application/json'
        }
    }).then(res=>res.json())
}