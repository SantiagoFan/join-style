<template>
<div>
    <cu-custom bgColor="bg-gradual-blue" :isBack="true"><div slot="backText">返回</div><div slot="content">布局</div></cu-custom>
   
    <div class="bg-white nav text-center fixed" style="top: 45px;">
        <div class="div">
            <div class="div" style="overflow: auto hidden;">
                <div>
                    <div data-id="0" class="cu-item text-blue cur">Flex布局</div>
                    <div data-id="1" class="cu-item">Grid布局</div>
                    <div data-id="2" class="cu-item">辅助布局</div>
                </div>
            </div>
        </div>
    </div>
    <div class="cu-bar bg-white solid-bottom margin-top">
        <div class="action">
            <span class="cuIcon-title text-blue"><span></span></span>固定尺寸
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
            <span class="cuIcon-title text-blue"><span></span></span>比例布局
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
            <span class="cuIcon-title text-blue"><span></span></span>水平对齐(justify)
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
            <span class="cuIcon-title text-blue"><span></span></span>垂直对齐(align)
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
    <!---->
    <!---->
</div>
</template>