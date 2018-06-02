<template>
  <div @click="hidePicker" style="display:inline-flex;">
    <div style="display:inline-block;">
      <div @click="increase(index)" class="wrapper" v-for="(emoji, index) in emojis" :key="emoji.name">
        <span class="emoji-style">
          <img width="16" height="16" :src="getEmoji(emoji.name)" />
        </span>
        <span class="count">{{emoji.count}}</span>
      </div>
      <div style="display:inline-block;">
        <div class="wrapper">
          <span class="count" @click="showPicker">+</span>
          <div class="selector-style" v-show="isShowPicker">
            <div>
              <input class="input" @click="showPicker" type='text' placeholder='Search' v-model="keyword" />
            </div>
            <span class="exit" @click="hidePicker">X</span>
            <div class="emoji-box">
              <span style="cursor:pointer;padding:5px;" :key="emo" v-for="emo in emoji">
                <img width="16" height="16" :src="getEmoji(emo)" @click="addEmoji(emo)" />
              </span>
            </div>
          </div>
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
      isShowPicker: false,
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
    hidePicker() {
      this.isShowPicker = false      
    },
    showPicker(evt) {
      evt.stopPropagation()
      this.isShowPicker = true
    },
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

.wrapper:hover .count {
	color: #4fb0fc;
}

.count {
	font-size: 11px;
	font-family: helvetica, arial;
	position: relative;
	top: -2px;
	padding: 0px 1px 3px;
	color: #959595;
}

.count:hover, .exit:hover {
	color: #4fb0fc;
}

.emoji-style {
	line-height: 20px;
	vertical-align: middle;
	display: inline-block;
}


.exit {
	color: rgb(232, 232, 232); 
	font-size: 20px;
	cursor: pointer;
	float: right;
	margin-top: -32px;
	margin-right: 5px;
}

.selector-style {
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
}

.emoji-box {
  padding:10px;
  padding-top:5px;
  width:230px;
  height:160px;
  overflow:auto;
}
</style>
