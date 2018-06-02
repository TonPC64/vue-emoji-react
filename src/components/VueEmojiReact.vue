<template>
  <div>
    <div @click="increase(index)" style="display:inline-block;" class="wrapper emojiStyle" v-for="(emoji, index) in emojis" :key="emoji.name">
      <img width="16" height="16" :src="getEmoji(emoji.name)" />
      <span class="count">{{emoji.count}}</span>
    </div>
    <div style="display:inline-block;">
      <span class="wrapper count" @click="showPicker = true">+</span>
      <div class="selectorStyle" v-show="showPicker">
        <div>
          <input class="input" type='text' placeholder='Search' v-model="keyword" />
          <span class="exit" @click="showPicker = false">X</span>
        </div>
        <div style="padding: 10px; paddingTop: 5px; width: 230px; height: 160px; overflow: auto">
          <span style="cursor:pointer; padding: 5px;" :key="emo" v-for="emo in emoji">
            <img width="16" height="16" :src="getEmoji(emo)" @click="addEmoji(emo)" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emojiList as emoji } from 'get-emoji';
import getEmoji from 'get-emoji';
export default {
  data() {
    return {
      showPicker: false,
      keyword: '',
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
  computed: {
    emoji () {
      return emoji.filter(name => name.indexOf(this.keyword) !== -1)
    }
  },
  methods: {
    getEmoji,
    increase (index) {
      this.emojis[index].count++
    },
    addEmoji(name) {
      if (!this.emojis.filter(emo => emo.name === name).length) {
        this.emojis.push({
          name,
          count: 1
        })
      }
    }
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

.count:hover, .exit:hover {
	color: #4fb0fc;
}

.exit {
	color: rgb(232, 232, 232); 
	font-size: 20px;
	cursor: pointer;
	float: right;
	margin-top: -32px;
	margin-right: 5px;
}

.selectorStyle {
	box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.24);
	background-color: #fff;
	width: 250px;
	height: 220px;
	position: relative;
	left: 10px;
	top: 0px;
}

.input {
	margin: 10px;
	width: 85%;
	border-radius: 5px;
	border: 1px solid #E8E8E8;
	padding: 2px;
}
</style>
