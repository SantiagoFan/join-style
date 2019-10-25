<template>
<div>
    <cu-custom bgColor="bg-gradual-blue" :isBack="true"><div slot="backText">返回</div><div slot="content">标签</div></cu-custom>
   
    <div class="cu-bar bg-white solid-bottom">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>标签形状
        </div>
    </div>
    <div class="padding bg-white solid-bottom">
        <div class="cu-tag">默认</div>
        <div class="cu-tag round">椭圆</div>
        <div class="cu-tag radius">圆角</div>
    </div>
    <div class="cu-bar bg-white margin-top">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>标签尺寸
        </div>
    </div>
    <div class="padding bg-white">
        <div class="cu-tag radius sm">小尺寸</div>
        <div class="cu-tag radius">普通尺寸</div>
    </div>
    <div class="cu-bar bg-white margin-top">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>标签颜色
        </div>
    </div>
    <div class="padding-sm flex flex-wrap">
        <div class="padding-xs">
            <div class="cu-tag bg-red">嫣红</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag bg-orange">桔橙</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag bg-yellow">明黄</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag bg-olive">橄榄</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag bg-green">森绿</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag bg-cyan">天青</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag bg-blue">海蓝</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag bg-purple">姹紫</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag bg-mauve">木槿</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag bg-pink">桃粉</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag bg-brown">棕褐</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag bg-grey">玄灰</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag bg-gray">草灰</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag bg-black">墨黑</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag bg-white">雅白</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag light bg-red">嫣红</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag light bg-orange">桔橙</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag light bg-yellow">明黄</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag light bg-olive">橄榄</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag light bg-green">森绿</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag light bg-cyan">天青</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag light bg-blue">海蓝</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag light bg-purple">姹紫</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag light bg-mauve">木槿</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag light bg-pink">桃粉</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag light bg-brown">棕褐</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag light bg-grey">玄灰</div>
        </div>
        <!---->
        <!---->
        <!---->
    </div>
    <div class="cu-bar bg-white margin-top">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>镂空标签
        </div>
    </div>
    <div class="padding-sm flex flex-wrap">
        <div class="padding-xs">
            <div class="cu-tag line-red">嫣红</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag line-orange">桔橙</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag line-yellow">明黄</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag line-olive">橄榄</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag line-green">森绿</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag line-cyan">天青</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag line-blue">海蓝</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag line-purple">姹紫</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag line-mauve">木槿</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag line-pink">桃粉</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag line-brown">棕褐</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag line-grey">玄灰</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag line-gray">草灰</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag line-black">墨黑</div>
        </div>
        <div class="padding-xs">
            <div class="cu-tag line-white">雅白</div>
        </div>
    </div>
    <div class="cu-bar bg-white margin-top">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>胶囊样式
        </div>
    </div>
    <div class="padding">
        <div class="cu-capsule">
            <div class="cu-tag bg-red">
                <p class="cuIcon-likefill"><span></span></p>
            </div>
            <div class="cu-tag line-red">12</div>
        </div>
        <div class="cu-capsule round">
            <div class="cu-tag bg-blue ">
                <p class="cuIcon-likefill"><span></span></p>
            </div>
            <div class="cu-tag line-blue">23</div>
        </div>
        <div class="cu-capsule round">
            <div class="cu-tag bg-blue ">说明</div>
            <div class="cu-tag line-blue">123</div>
        </div>
        <div class="cu-capsule radius">
            <div class="cu-tag bg-grey ">
                <p class="cuIcon-likefill"><span></span></p>
            </div>
            <div class="cu-tag line-grey">23</div>
        </div>
        <div class="cu-capsule radius">
            <div class="cu-tag bg-brown sm">
                <p class="cuIcon-likefill"><span></span></p>
            </div>
            <div class="cu-tag line-brown sm">23</div>
        </div>
    </div>
    <div class="cu-bar bg-white margin-top">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>数字标签
        </div>
    </div>
    <div class="padding flex justify-between align-center">
        <div class="cu-avatar xl radius">港<div class="cu-tag badge">99+
            </div>
        </div>
        <div class="cu-avatar xl radius"
            style="background-image: url(&quot;https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg&quot;);">
            <div class="cu-tag badge">9</div>
        </div>
        <div class="cu-avatar xl radius">
            <div class="cu-tag badge">99</div>
            <p class="cuIcon-people"><span></span></p>
        </div>
        <div class="cu-avatar xl radius">
            <div class="cu-tag badge">99+</div>
        </div>
    </div>
</div>
</template>