<template>
    <div>
        <button v-on="downloadChords">Download</button>
    </div>
</template>

<script>
import ChordService from '../ChordService.js';


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
