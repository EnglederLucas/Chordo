<template>
    <div>
        <vue-editor id="editor1" v-model="content" :editorToolbar="customToolbar"></vue-editor>
    </div>
</template>


<script>
//import axios from 'axios';
import { VueEditor } from "vue2-editor";

    export default {
    components: {
       VueEditor
    },
    data() {
      return {
        content: '<h2>Html Editor </h2>',
        customToolbar: [
            ['bold', 'italic', 'underline']
            ]
        }
    },
    methods: {
        setText(text)
        {
            this.content = text;
        }
    },
}
</script>

<style scoped>
div{
    margin-top:100px;
    height: 1000px;
      font-family: 'Quicksand', sans-serif;

}
</style>
