<template>
	<div>
        <div style="height:45px;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><template slot="backText">返回</template><template slot="content">布局</template></cu-custom>
		</div>
        <scroll-div scroll-x class="bg-white nav text-center fixed" style="top:45px">
			<div class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabNav" :key="index" @click="tabSelect"
			 :data-id="index">
				{{tabNav[index]}}
			</div>
		</scroll-div>
		<template v-if="TabCur==0">
			<div class="cu-bar bg-white solid-bottom margin-top">
				<div class="action">
					<text class="cuIcon-title text-blue"></text>固定尺寸
				</div>
			</div>
			<div class="padding bg-white">
				<div class="flex flex-wrap">
					<div class="basis-xs bg-grey margin-xs padding-sm radius">xs(20%)</div>
					<div class="basis-df"></div>
					<div class="basis-sm bg-grey margin-xs padding-sm radius">sm(40%)</div>
					<div class="basis-df"></div>
					<div class="basis-df bg-grey margin-xs padding-sm radius">sub(50%)</div>
					<div class="basis-lg bg-grey margin-xs padding-sm radius">lg(60%)</div>
					<div class="basis-xl bg-grey margin-xs padding-sm radius">xl(80%)</div>
				</div>
			</div>
			<div class="cu-bar bg-white  margin-top solid-bottom">
				<div class="action">
					<text class="cuIcon-title text-blue"></text>比例布局
				</div>
			</div>
			<div class="padding bg-white">
				<div class="flex">
					<div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
					<div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
				</div>
				<div class="flex  p-xs margin-bottom-sm mb-sm">
					<div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
					<div class="flex-twice bg-grey padding-sm margin-xs radius">2</div>
				</div>
				<div class="flex  p-xs margin-bottom-sm mb-sm">
					<div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
					<div class="flex-twice bg-grey padding-sm margin-xs radius">2</div>
					<div class="flex-treble bg-grey padding-sm margin-xs radius">3</div>
				</div>
			</div>
			<div class="cu-bar bg-white  margin-top solid-bottom">
				<div class="action">
					<text class="cuIcon-title text-blue"></text>水平对齐(justify)
				</div>
			</div>
			<div class="bg-white">
				<div class="flex solid-bottom padding justify-start">
					<div class="bg-grey padding-sm margin-xs radius">start</div>
					<div class="bg-grey padding-sm margin-xs radius">start</div>
				</div>
				<div class="flex solid-bottom padding justify-end">
					<div class="bg-grey padding-sm margin-xs radius">end</div>
					<div class="bg-grey padding-sm margin-xs radius">end</div>
				</div>
				<div class="flex solid-bottom padding justify-center">
					<div class="bg-grey padding-sm margin-xs radius">center</div>
					<div class="bg-grey padding-sm margin-xs radius">center</div>
				</div>
				<div class="flex solid-bottom padding justify-between">
					<div class="bg-grey padding-sm margin-xs radius">between</div>
					<div class="bg-grey padding-sm margin-xs radius">between</div>
				</div>
				<div class="flex solid-bottom padding justify-around">
					<div class="bg-grey padding-sm margin-xs radius">around</div>
					<div class="bg-grey padding-sm margin-xs radius">around</div>
				</div>
			</div>
			<div class="cu-bar bg-white  margin-top solid-bottom">
				<div class="action">
					<text class="cuIcon-title text-blue"></text>垂直对齐(align)
				</div>
			</div>
			<div class="bg-white">
				<div class="flex solid-bottom padding align-start">
					<div class="bg-grey padding-lg margin-xs radius">ColorUi</div>
					<div class="bg-grey padding-sm margin-xs radius">start</div>
				</div>
				<div class="flex solid-bottom padding align-end">
					<div class="bg-grey padding-lg margin-xs radius">ColorUi</div>
					<div class="bg-grey padding-sm margin-xs radius">end</div>
				</div>
				<div class="flex solid-bottom padding align-center">
					<div class="bg-grey padding-lg margin-xs radius">ColorUi</div>
					<div class="bg-grey padding-sm margin-xs radius">center</div>
				</div>
			</div>
		</template>
		<template v-if="TabCur==1">
			<div class="cu-bar bg-white  margin-top solid-bottom">
				<div class="action">
					<text class="cuIcon-title text-blue"></text>等分列
				</div>
				<div class="action"></div>
			</div>
			<div class="bg-white padding">
				<div class="grid margin-bottom text-center" v-for="(item,index) in 5" :key="index" :class="'col-' + (index+1)">
					<div class="padding" :class="indexs%2==0?'bg-cyan':'bg-blue'" v-for="(item,indexs) in (index+1)*2" :key="indexs">{{indexs+1}}</div>
				</div>
			</div>
			<div class="cu-bar bg-white  margin-top solid-bottom">
				<div class="action">
					<text class="cuIcon-title text-blue"></text>等高
				</div>
				<div class="action"></div>
			</div>
			<div class="bg-white padding">
				<div class="grid col-4 grid-square">
					<div class="bg-img" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></div>
				</div>
			</div>
		</template>
		<template v-if="TabCur==2">
			<div class="cu-bar bg-white margin-top solid-bottom">
				<div class="action">
					<text class="cuIcon-title text-blue"></text>浮动
				</div>
			</div>
			<div class="bg-white padding">
				<div class=" cf padding-sm">
					<div class="bg-grey radius fl padding-sm">ColorUi fl</div>
					<div class="bg-grey radius fr padding-sm">ColorUi fr</div>
				</div>
			</div>
			<div class="cu-bar bg-white  solid-bottom margin-top solid-bottom">
				<div class="action">
					<text class="cuIcon-title text-blue"></text>内外边距
				</div>
			</div>
			<div class="bg-white">
				<div class="padding bg-gray">{size}的尺寸有xs/sm/df/lg/xl</div>
				<div class="flex flex-wrap padding solid-top">
					<div class="basis-df padding-bottom-xs">外边距</div>
					<div class="basis-df padding-bottom-xs">内边距</div>
					<div class="basis-df">.margin-{size}</div>
					<div class="basis-df">.padding-{size}</div>
				</div>
				<div class="flex flex-wrap padding solid-top">
					<div class="basis-df padding-bottom-xs">水平方向外边距</div>
					<div class="basis-df padding-bottom-xs">水平方向内边距</div>
					<div class="basis-df">.margin-lr-{size}</div>
					<div class="basis-df">.padding-lr-{size}</div>
				</div>
				<div class="flex flex-wrap padding solid-top">
					<div class="basis-df padding-bottom-xs">垂直方向外边距</div>
					<div class="basis-df padding-bottom-xs">垂直方向内边距</div>
					<div class="basis-df">.margin-tb-{size}</div>
					<div class="basis-df">.padding-tb-{size}</div>
				</div>
				<div class="flex flex-wrap padding solid-top">
					<div class="basis-df padding-bottom-xs">上外边距</div>
					<div class="basis-df padding-bottom-xs">上内边距</div>
					<div class="basis-df">.margin-top-{size}</div>
					<div class="basis-df">.padding-top-{size}</div>
				</div>
				<div class="flex flex-wrap padding solid-top">
					<div class="basis-df padding-bottom-xs">右外边距</div>
					<div class="basis-df padding-bottom-xs">右内边距</div>
					<div class="basis-df">.margin-right-{size}</div>
					<div class="basis-df">.padding-right-{size}</div>
				</div>
				<div class="flex flex-wrap padding solid-top">
					<div class="basis-df padding-bottom-xs">下外边距</div>
					<div class="basis-df padding-bottom-xs">下内边距</div>
					<div class="basis-df">margin-bottom-{size}</div>
					<div class="basis-df">.padding-bottom-{size}</div>
				</div>
				<div class="flex flex-wrap padding solid-top">
					<div class="basis-df padding-bottom-xs">左外边距</div>
					<div class="basis-df padding-bottom-xs">左内边距</div>
					<div class="basis-df">.margin-left-{size}</div>
					<div class="basis-df">.padding-left-{size}</div>
				</div>
			</div>
		</template>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				TabCur: 0,
				avatar:['https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'],
				tabNav: ['Flex布局', 'Grid布局', '辅助布局']
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
			}
		}
	}
</script>

<style>
	page {
		padding-top: 45px;
	}
</style>

