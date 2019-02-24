import axios from 'axios';
//var path = require('path'); 

const api = 'http://localhost:5000/api/';

class PostService {
    static putChords(url){
        return axios.post(api + "chords", {
            link: url
        })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            if(error)
            {
                // eslint-disable-next-line no-console
                console.log(error.response);
            }
        });
    }

    static downloadChords (file) {
        axios.get('http://localhost:5000/api/downloadChords', {
            fileName: file
        })
        .catch((error) => {
            if(error)
            {
                // eslint-disable-next-line no-console
                console.log(error.response);
            }
        })
    }

}

export default PostService;