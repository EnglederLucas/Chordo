<template>
  <div >
      <h1>Chordo</h1>
      <UrlComponent/>
      <Editor/>
  </div>
</template>

<script>
import UrlComponent from './UrlComponent.vue'
import Editor from './Editor.vue'

export default {
  name: 'Home',
  components: {
    UrlComponent,
    Editor
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-family: 'Quicksand', sans-serif;
  font-size: 3em;
  color: coral;
  font-weight: bold;
}
</style>
