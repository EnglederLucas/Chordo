<template>
    <div>
        <!-- <button v-on:click="downloadChords">Download</button> -->
        <a href="http://localhost:5000/api/downloadChords/" + {{this.fileID}} class=".button">Download</a>
    </div>
</template>

<script>
import ChordService from '../ChordService.js';

const api = 'http://localhost:5000/api/';

export default {
    name: "DownloadComponent",
    props: {
        fileID: String
    },
    methods: {
        async downloadChords() {
            await ChordService.downloadChords(this.fileID);
        }    
    }
}
</script>

<style scoped>

</style>
