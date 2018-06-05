<template>
  <div id="app">
    <vue-emoji-react v-model="emojis" @reaction="onReaction" @emojiClick="onEmojiClick" />
  </div>
</template>

<script>
import VueEmojiReact from './components/VueEmojiReact'
export default {
  name: 'app',
  components: {
    VueEmojiReact
  },
  methods: {
    onReaction(name, index) {
      this.emojis[index].count++
    },
    onEmojiClick(name) {
      if (this.emojis.findIndex(emo => emo.name === name) === -1) {
        this.emojis.push({
          name,
          count: 1
        })
      }
    }
  },
  data() {
    return {
      emojis: [
        {
          name: 'rage',
          count: 2
        },
        {
          name: 'blush',
          count: 1
        },
        {
          name: '100',
          count: 3
        },
        {
          name: 'grinning',
          count: 2
        }
      ]
    }
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
