<template>
  <div id="app">
    <vue-emoji-react/>
  </div>
</template>

<script>
import VueEmojiReact from './components/VueEmojiReact';
export default {
  name: 'app',
  components: {
    VueEmojiReact
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
