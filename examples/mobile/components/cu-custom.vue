<template>
	<div>
		<div class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
			<div class="action" @click="BackPage" v-if="isBack">
				<span class="cuIcon-back"></span>
				<slot name="backText"></slot>
			</div>
			<div class="content text-bold">
				<slot name="content"></slot>
			</div>
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return{}
		},
		name: 'cu-custom',
		computed: {
			style() {
				var style='';
				if (this.bgImage) {
					style = `background-image:url(${this.bgImage});`;
				}
				return style
			}
		},
		props: {
			bgColor: {// 背景颜色
				type: String,
				default: ''
			},
			isBack: { // 是否返回
				type: [Boolean, String],
				default: false
			},
			bgImage: { // 背景图
				type: String,
				default: ''
			},
		},
		methods: {
			// 点击返回
			BackPage() {
				this.$router.go(-1);//返回上一层
			}
		}
	}
</script>

<style>
</style>