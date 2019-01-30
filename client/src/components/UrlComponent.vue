<template>
    <div>
        <input type="url" id="chord-link" placeholder="Ultimate Guitar Link" v-model="link">   
        <button v-on:click="getChordsFromLink">Get Chords</button>   
        <DownloadComponent v-bind="fileID"></DownloadComponent>
    </div>
</template>


<script>
import ChordService from '../ChordService.js';
import DownloadComponent from './DownloadComponent.vue';

export default {
    name: 'UrlComponent',
    components: {
        DownloadComponent
    },
    data: () => {
        return {
            link: '',
            fileID: ''
        }
    },
    methods: {
        async getChordsFromLink() {
            this.fileID = await ChordService.putChords(this.link);

            alert(this.fileID);
            // this.link = '';
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

    button:hover{
        background-color:#CD5B45;
    }

    div{
        font-family: 'Quicksand', sans-serif;
    }
</style>
