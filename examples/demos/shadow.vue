<template>
<div>
    <cu-custom bgColor="bg-gradual-blue" :isBack="true"><div slot="backText">返回</div><div slot="content">边框阴影</div></cu-custom>
   
    <div class="cu-bar bg-white solid-bottom">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>边框
        </div>
        <div class="action">
            <uni-switch class="sm">
                <div class="uni-switch-wrapper">
                    <div class="uni-switch-input"
                        style="background-color: rgb(223, 223, 223); border-color: rgb(223, 223, 223);"></div>
                    <div class="uni-checkbox-input" style="color: rgb(0, 122, 255); display: none;"></div>
                </div>
            </uni-switch>
        </div>
    </div>
    <div class="padding bg-white text-center">
        <div class="padding solid">四周</div>
        <div class="padding margin-top solid-top">上</div>
        <div class="padding margin-top solid-right">右</div>
        <div class="padding margin-top solid-bottom">下</div>
        <div class="padding margin-top solid-left">左</div>
    </div>
    <div class="cu-bar bg-white margin-top">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>阴影
        </div>
    </div>
    <div class="padding text-center">
        <div class="padding-xl radius shadow bg-white">默认阴影</div>
        <div class="padding-xl radius shadow bg-blue margin-top">根据背景颜色而改变的阴影</div>
        <div class="padding-xl radius shadow shadow-lg bg-white margin-top">长阴影</div>
        <div class="padding-xl radius shadow shadow-lg bg-blue margin-top">长阴影</div>
        <div class="padding-xl radius shadow-warp bg-white margin-top">翘边阴影</div>
        <div class="padding-xl radius shadow-blur bg-red margin-top bg-img"
            style="background-image: url(&quot;https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg&quot;);">
            <div>根据背景图而改变的阴影</div>
        </div>
    </div>
</div>
</template>