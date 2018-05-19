<template>
  <div>
    <img style="width: 16px; height: 16px" :src="getEmoji(name)" :key="name" v-for="name in emoji" />
  </div>
</template>

<script>
import { emojiList as emoji } from 'get-emoji';
import getEmoji from 'get-emoji';

export default {
  data() {
    return {
      emoji
    }
  },
  methods: {
    getEmoji
  },
  created () {
    // const show = emoji.filter(name => name.indexOf(this.state.filter) !== -1);
    console.log(emoji)
  }
}
</script>

<style scoped>
.wrapperStyle {
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

.emojiStyle {
	line-height: 20px;
	vertical-align: middle;
	display: inline-block;
}

.wrapperHover {
	border: 1px solid #4fb0fc;
}

.countStyle {
	font-size: 11px;
	font-family: helvetica, arial;
	position: relative;
	top: -2px;
	padding: 0 1px 3px;
	color: #959595;
}

.countHover {
	color: #4fb0fc;
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
</style>
