<template>
<div>
    <cu-custom bgColor="bg-gradual-blue" :isBack="true"><div slot="backText">返回</div><div slot="content">按钮</div></cu-custom>
   
    <div class="cu-bar bg-white solid-bottom">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>按钮形状
        </div>
        <div class="action">
            <uni-navigator class="action">
                <p class="cuIcon-skinfill"><span></span></p>
                <p class="text-df"><span>设计</span></p>
            </uni-navigator>
        </div>
    </div>
    <div class="padding flex flex-wrap justify-between align-center bg-white">
        <div class="cu-btn">默认</div>
        <div class="cu-btn round">圆角</div>
        <div class="cu-btn icon">
            <p class="cuIcon-emojifill"><span></span></p>
        </div>
    </div>
    <div class="cu-bar margin-top bg-white solid-bottom">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>按钮尺寸
        </div>
    </div>
    <div class="padding flex flex-wrap justify-between align-center bg-white">
        <div class="cu-btn round sm">小尺寸</div>
        <div class="cu-btn round">默认</div>
        <div class="cu-btn round lg">大尺寸</div>
    </div>
    <div class="cu-bar margin-top bg-white">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>按钮颜色
        </div>
        <div class="action">
            <p class="text-df margin-right-sm"><span>阴影</span></p>
            <uni-switch class="checked">
                <div class="uni-switch-wrapper">
                    <div class="uni-switch-input uni-switch-input-checked"
                        style="background-color: rgb(57, 181, 74); border-color: rgb(57, 181, 74);"></div>
                    <div class="uni-checkbox-input uni-checkbox-input-checked"
                        style="color: rgb(57, 181, 74); display: none;"></div>
                </div>
            </uni-switch>
        </div>
    </div>
    <div class="grid col-5 padding-sm">
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round bg-red shadow">嫣红</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round bg-orange shadow">桔橙</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round bg-yellow shadow">明黄</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round bg-olive shadow">橄榄</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round bg-green shadow">森绿</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round bg-cyan shadow">天青</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round bg-blue shadow">海蓝</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round bg-purple shadow">姹紫</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round bg-mauve shadow">木槿</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round bg-pink shadow">桃粉</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round bg-brown shadow">棕褐</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round bg-grey shadow">玄灰</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round bg-gray shadow">草灰</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round bg-black shadow">墨黑</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round bg-white shadow">雅白</div>
        </div>
    </div>
    <div class="cu-bar margin-top bg-white">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>镂空按钮
        </div>
        <div class="action">
            <uni-radio-group>
                <uni-label class="margin-left-sm">
                    <uni-radio class="blue radio">
                        <div class="uni-radio-wrapper">
                            <div class="uni-radio-input uni-radio-input-checked"
                                style="background-color: rgb(0, 122, 255); border-color: rgb(0, 122, 255);"></div>
                        </div>
                    </uni-radio>
                    <p class="margin-left-sm"><span>小</span></p>
                </uni-label>
                <uni-label class="margin-left-sm">
                    <uni-radio class="blue radio">
                        <div class="uni-radio-wrapper">
                            <div class="uni-radio-input" style=""></div>
                        </div>
                    </uni-radio>
                    <p class="margin-left-sm"><span>大</span></p>
                </uni-label>
            </uni-radio-group>
        </div>
    </div>
    <div class="grid col-5 padding-sm">
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round line-red shadow">嫣红</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round line-orange shadow">桔橙</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round line-yellow shadow">明黄</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round line-olive shadow">橄榄</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round line-green shadow">森绿</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round line-cyan shadow">天青</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round line-blue shadow">海蓝</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round line-purple shadow">姹紫</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round line-mauve shadow">木槿</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round line-pink shadow">桃粉</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round line-brown shadow">棕褐</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round line-grey shadow">玄灰</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round line-gray shadow">草灰</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round line-black shadow">墨黑</div>
        </div>
        <div class="margin-tb-sm text-center">
            <div class="cu-btn round line-white shadow">雅白</div>
        </div>
    </div>
    <div class="cu-bar margin-top bg-white">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>块状按钮
        </div>
    </div>
    <div class="padding flex flex-direction">
        <div class="cu-btn bg-grey lg">玄灰</div>
        <div class="cu-btn bg-red margin-tb-sm lg">嫣红</div>
    </div>
    <div class="cu-bar margin-top bg-white">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>无效状态
        </div>
    </div>
    <div class="padding">
        <div disabled="true" class="cu-btn block bg-blue margin-tb-sm lg" type="">无效状态
        </div>
        <div disabled="true" class="cu-btn block line-blue margin-tb-sm lg">无效状态</div>
    </div>
    <div class="cu-bar margin-top bg-white">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>按钮加图标
        </div>
    </div>
    <div class="padding-xl">
        <div class="cu-btn block line-orange lg">
            <p class="cuIcon-upload"><span></span></p>图标
        </div>
        <div class="cu-btn block bg-blue margin-tb-sm lg">
            <p class="cuIcon-loading2 iconfont-spin"><span></span></p>加载
        </div>
        <div class="cu-btn block bg-black margin-tb-sm lg" loading="">原生加载</div>
    </div>
</div>
</template>