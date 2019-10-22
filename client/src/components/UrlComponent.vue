<template>
    <div>
        <input type="url" id="chord-link" placeholder="Ultimate Guitar Link" v-model="link">   
        <button v-on:click="editChordsFromLink">Edit</button>   
        <button v-on:click="getChordsFromLink">Get Chords</button>   
    </div>
</template>


<script>
import ChordService from '../ChordService.js';
// import DownloadComponent from './DownloadComponent.vue';
import axios from 'axios';

export default {
    name: 'UrlComponent',
    components: {
        // DownloadComponent
    },
    data: () => {
        return {
            link: '',
            fileID: '',
            text: ''
        }
    },
    methods: {
        async getChordsFromLink() {
            ChordService.putChords(this.link).then((data) => {
                this.fileID = data.file;
            });

            // this.link = '';
        },
        async editChordsFromLink(){
            ChordService.getChordText(this.link);
        },
        async downloadChords() {
            // await ChordService.downloadChords(this.fileID);
            //alert("before download " + this.fileID + "type" + typeof(this.fileID))

            axios.get('http://localhost:5000/api/downloadChords', {
                params: {
                    fileName: this.fileID
                }            
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
}
</script>

<style scoped>
    input{
        display: flex-center;
        width: 40%;
        font-size: 1.2em;
        padding: 10px 0 10px 0;
        text-align: left;
        padding-left: 5px;
    }
    button{
        width: 15%;
        font-size: 1.2em;
        padding: 10px 0 10px 0;
        background-color: coral;
        color: white;
        border: 3px solid;
        border-radius: 6px;
        position:relative;
        outline: none;
        display:flex-right;
    }

    .button{
        width: 15%;
        font-size: 1.2em;
        padding: 10px 0 10px 0;
        background-color: coral;
        color: white;
        border: 3px solid;
        border-radius: 6px;
        position:relative;
        outline: none;
        display:flex-right;
    }

    button:hover{
        background-color:#CD5B45;
    }

    div{
        font-family: 'Quicksand', sans-serif;
    }
</style>
