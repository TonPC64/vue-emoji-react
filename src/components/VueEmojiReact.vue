<template>
  <div>
    <div class="wrapper emojiStyle" v-for="emoji in emojis" :key="emoji.name">
      <img width="16" height="16" :src="getEmoji(emoji.name)" />
      <span class="count">{{emoji.count}}</span>
    </div>
    <span class="wrapper count">+</span>
    <picker-emoji>
      <img width="16" height="16" :key="emo" v-for="emo in emoji" :src="getEmoji(emo)" />
    </picker-emoji>
  </div>
</template>

<script>
import { emojiList as emoji } from 'get-emoji';
import getEmoji from 'get-emoji';
import PickerEmoji from './PickerEmoji';
export default {
  components: {
    PickerEmoji
  },
  data() {
    return {
      emoji,
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
          name: 100,
          count: 3
        },
        {
          name: 'grinning',
          count: 2
        }
      ]
    }
  },
  methods: {
    getEmoji,
  },
  created () {
    // const show = emoji.filter(name => name.indexOf(this.state.filter) !== -1);
  }
}
</script>

<style scoped>
.wrapper {
	display: inline-block;
	margin-top: 2px;
	margin-bottom: 2px;
	margin-right: 4px;
	padding: 1px 3px;
	border-radius: 5px;
	background-color: #fff;
	border: 1px solid #E8E8E8;
	cursor: pointer;
	height: 1.4rem;
	line-height: 23px;
	user-select: none;
}

.wrapper:hover {
	border: 1px solid #4fb0fc;
}

.emojiStyle {
	line-height: 20px;
	vertical-align: middle;
	display: inline-block;
}


.count {
	font-size: 11px;
	font-family: helvetica, arial;
	position: relative;
	top: -2px;
	padding: 1px 3px;
	color: #959595;
}

.count:hover {
	color: #4fb0fc;
}
</style>
