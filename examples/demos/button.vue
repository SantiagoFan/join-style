<template>
	<div>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><template slot="backText">返回</template><template slot="content">按钮</template></cu-custom>
		<div class="cu-bar bg-white solid-bottom">
			<div class="action">
				<span class="cuIcon-title text-blue"></span>按钮形状
			</div>
			<div class="action">
                <router-link to="design" >
                    <span class="cuIcon-skinfill"></span>
					<span class="text-df">设计</span>
                    </router-link>
				<!-- <navigator class="action" url="design" hover-class="none">
					
				</navigator> -->
			</div>
		</div>
		<div class="padding flex flex-wrap justify-between align-center bg-white">
			<button class="cu-btn">默认</button>
			<button class="cu-btn round">圆角</button>
			<button class="cu-btn cuIcon">
				<span class="cuIcon-emojifill"></span>
			</button>
		</div>
		<div class="cu-bar margin-top bg-white solid-bottom">
			<div class="action">
				<span class="cuIcon-title text-blue"></span>按钮尺寸
			</div>
		</div>
		<div class="padding flex flex-wrap justify-between align-center bg-white">
			<button class="cu-btn round sm">小尺寸</button>
			<button class="cu-btn round">默认</button>
			<button class="cu-btn round lg">大尺寸</button>
		</div>
		<div class="cu-bar margin-top bg-white">
			<div class="action">
				<span class="cuIcon-title text-blue"></span>按钮颜色
			</div>
			<div class="action">
				<span class="text-df margin-right-sm">阴影</span>
				<switch @change="SetShadow" :class="shadow?'checked':''" color="#39B54A"></switch>
			</div>
		</div>
		<div class="grid col-5 padding-sm">
			<div class="margin-tb-sm text-center" v-for="(item,index) in ColorList" :key="index">
				<button class="cu-btn round" :class="['bg-' + item.name , shadow?'shadow':'']">{{item.title}}</button>
			</div>
		</div>
		<div class="cu-bar margin-top bg-white">
			<div class="action">
				<span class="cuIcon-title text-blue"></span>镂空按钮
			</div>
			<div class="action">
				<radio-group @change="SetBorderSize">
					<label class="margin-left-sm">
						<radio class="blue radio" value="" checked></radio>
						<text class="margin-left-sm">小</text>
					</label>
					<label class="margin-left-sm">
						<radio class="blue radio" value="s"></radio>
						<text class="margin-left-sm">大</text>
					</label>
				</radio-group>
			</div>
		</div>
		<div class="grid col-5 padding-sm">
			<div class="margin-tb-sm text-center" v-for="(item,index) in ColorList" :key="index" v-if="item.name!='white'">
				<button class="cu-btn round" :class="[bordersize?'lines-' + item.name:'line-' + item.name, shadow?'shadow':'']">{{item.title}}</button>
			</div>
		</div>
		<div class="cu-bar margin-top bg-white">
			<div class="action">
				<span class="cuIcon-title text-blue"></span>块状按钮
			</div>
		</div>
		<div class="padding flex flex-direction">
			<button class="cu-btn bg-grey lg">玄灰</button>
			<button class="cu-btn bg-red margin-tb-sm lg">嫣红</button>
		</div>
		<div class="cu-bar margin-top bg-white">
			<div class="action">
				<span class="cuIcon-title text-blue"></span>无效状态
			</div>
		</div>
		<div class="padding">
			<button class="cu-btn block bg-blue margin-tb-sm lg" disabled type="">无效状态</button>
			<button class="cu-btn block line-blue margin-tb-sm lg" disabled>无效状态</button>
		</div>
		<div class="cu-bar margin-top bg-white">
			<div class="action">
				<span class="cuIcon-title text-blue"></span>按钮加图标
			</div>
		</div>
		<div class="padding-xl">
			<button class="cu-btn block line-orange lg">
				<span class="cuIcon-upload"></span> 图标</button>
			<button class="cu-btn block bg-blue margin-tb-sm lg">
				<span class="cuIcon-loading2 cuIconfont-spin"></span> 加载</button>
			<button class="cu-btn block bg-black margin-tb-sm lg" loading> 原生加载</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ColorList: this.ColorList,
				shadow: false,
				bordersize: ''
			};
		},
		methods: {
			SetShadow(e) {
				this.shadow = e.detail.value
			},
			SetBorderSize(e) {
				this.bordersize = e.detail.value
			}
		}
	}
</script>

<style>
</style>