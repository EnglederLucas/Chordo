import axios from 'axios';
// var path = require('path'); 

const api = 'http://localhost:5000/api/';

class PostService {
    static putChords(url){
        var fileID = axios.post(api + "chords", {
            link: url
        })
        .catch((error) => {
            if(error)
            {
                // eslint-disable-next-line no-console
                console.log(error.response);
            }
        })

        return fileID;
    }

    static downloadChords () {
        axios.get(path.join(api, "downloadChords"), {

        })
    }

}

export default PostService;