<template>
<div>
    <cu-custom bgColor="bg-gradual-blue" :isBack="true">
        <div slot="backText">返回</div>
        <div slot="content">加载</div>
        <div slot="right" class="action">
            <div class="cu-load load-icon loading"></div>
        </div>
    </cu-custom>

    <div class="cu-bar bg-white">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>背景
        </div>
    </div>
    <div class="cu-load bg-blue loading"></div>
    <div class="cu-bar bg-white margin-top">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>加载状态
        </div>
        <div class="action">
            <uni-switch class="">
                <div class="uni-switch-wrapper">
                    <div class="uni-switch-input"
                        style="background-color: rgb(223, 223, 223); border-color: rgb(223, 223, 223);"></div>
                    <div class="uni-checkbox-input" style="color: rgb(0, 122, 255); display: none;"></div>
                </div>
            </uni-switch>
        </div>
    </div>
    <div class="cu-load bg-grey loading"></div>
    <div class="cu-bar bg-white margin-top">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>加载错误
        </div>
    </div>
    <div class="cu-load bg-red erro"></div>
    <div class="cu-bar bg-white margin-top">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>弹框加载
        </div>
        <div class="action">
            <button class="cu-btn bg-green shadow">点我</button>
        </div>
    </div>
    <!---->
    <div class="cu-bar bg-white margin-top">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>进度条加载
        </div>
        <div class="action">
            <button class="cu-btn bg-green shadow">点我</button>
        </div>
    </div>
    <div class="load-progress hide" style="top: 45px;">
        <div class="load-progress-bar bg-green"
            style="transform: translate3d(-100%, 0px, 0px);"></div>
        <div class="load-progress-spinner text-green"></div>
    </div>
</div>
</template>