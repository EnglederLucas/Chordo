import axios from 'axios';
//var path = require('path'); 

const api = 'http://localhost:5000/api/';

class PostService {

    static putChords(url){
        alert(url);
        axios({
            method: 'post',
            url: api+ 'chords',
            data: {
                link:url
            },
            responseType: 'blob'
        })
        .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.pdf'); //or any other extension
            document.body.appendChild(link);
            link.click();
        })
    }

}

export default PostService;