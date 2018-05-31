<template>
	<div class="selectorStyle">
		<div>
			<input class="input" type='text' placeholder='Search' v-model="keyword" />
			<span style="color: rgb(232, 232, 232); font-size: 20px; cursor: pointer; float: right; margin-top: -32px; margin-right: 5px;">X</span>
		</div>
		<div style="padding: 10px; paddingTop: 5px; width: 230px; height: 160px; overflow: auto">
			<slot/>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			keyword: ''
		}
	}
}
</script>



<style scoped>
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
