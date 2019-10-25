<template>
<div>
    <div>
        <div class="cu-custom" style="height: 45px;">
            <div class="cu-bar fixed bg-gradual-blue" style="height: 45px; padding-top: 0px;">
                <div class="action">
                    <p class="cuIcon-back"><span></span></p>返回
                </div>
                <div class="content" style="top: 0px;">进度条</div>
            </div>
        </div>
    </div>
    <div class="cu-bar bg-white solid-bottom">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>进度条形状
        </div>
    </div>
    <div class="padding bg-white">
        <div class="cu-progress">
            <div class="bg-red" style="width: 61.8%;">61.8%</div>
        </div>
        <div class="cu-progress radius margin-top">
            <div class="bg-red" style="width: 61.8%;">61.8%</div>
        </div>
        <div class="cu-progress round margin-top">
            <div class="bg-red" style="width: 61.8%;">61.8%</div>
        </div>
    </div>
    <div class="cu-bar bg-white solid-bottom margin-top">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>进度条尺寸
        </div>
    </div>
    <div class="padding bg-white">
        <div class="cu-progress round">
            <div class="bg-red" style="width: 61.8%;"></div>
        </div>
        <div class="cu-progress round margin-top sm">
            <div class="bg-red" style="width: 61.8%;"></div>
        </div>
        <div class="cu-progress round margin-top xs">
            <div class="bg-red" style="width: 61.8%;"></div>
        </div>
    </div>
    <div data-target="ColorModal" class="cu-bar bg-white solid-bottom margin-top">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>进度条颜色
        </div>
        <div class="action">
            <div class="padding-sm solid radius shadow-blur bg-red"></div>
        </div>
    </div>
    <div class="padding bg-white">
        <div class="cu-progress round">
            <div class="bg-red" style="width: 61.8%;"></div>
        </div>
    </div>
    <div class="cu-bar bg-white solid-bottom margin-top">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>进度条条纹
        </div>
        <uni-switch class="margin-right-sm">
            <div class="uni-switch-wrapper">
                <div class="uni-switch-input"
                    style="background-color: rgb(223, 223, 223); border-color: rgb(223, 223, 223);"></div>
                <div class="uni-checkbox-input" style="color: rgb(0, 122, 255); display: none;"></div>
            </div>
        </uni-switch>
    </div>
    <div class="padding bg-white">
        <div class="cu-progress round sm striped">
            <div class="bg-green" style="width: 60%;"></div>
        </div>
        <div class="cu-progress round sm margin-top-sm striped">
            <div class="bg-black" style="width: 40%;"></div>
        </div>
    </div>
    <div class="cu-bar bg-white solid-bottom margin-top">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>进度条比例
        </div>
    </div>
    <div class="padding bg-white">
        <div class="cu-progress radius striped active">
            <div class="bg-red" style="width: 30%;">30%</div>
            <div class="bg-olive" style="width: 45%;">45%</div>
            <div class="bg-cyan" style="width: 25%;">25%</div>
        </div>
    </div>
    <div class="cu-bar bg-white solid-bottom margin-top">
        <div class="action">
            <p class="cuIcon-title text-blue"><span></span></p>进度条布局
        </div>
    </div>
    <div class="padding bg-white ">
        <div class="flex">
            <div class="cu-progress round">
                <div class="bg-green" style="width: 100%;"></div>
            </div>
            <p class="cuIcon-roundcheckfill text-green margin-left-sm"><span></span>
            </p>
        </div>
        <div class="flex margin-top">
            <div class="cu-progress round">
                <div class="bg-green" style="width: 80%;"></div>
            </div>
            <p class="margin-left"><span>80%</span></p>
        </div>
    </div>
    <div class="cu-modal">
        <div class="cu-dialog">
            <div class="cu-bar justify-end solid-bottom">
                <div class="content">选择颜色</div>
                <div class="action">
                    <p class="cuIcon-close text-red"><span></span></p>
                </div>
            </div>
            <div class="grid col-5 padding">
                <div data-color="red" class="padding-xs">
                    <div class="padding-tb radius bg-red">嫣红</div>
                </div>
                <div data-color="orange" class="padding-xs">
                    <div class="padding-tb radius bg-orange">桔橙</div>
                </div>
                <div data-color="yellow" class="padding-xs">
                    <div class="padding-tb radius bg-yellow">明黄</div>
                </div>
                <div data-color="olive" class="padding-xs">
                    <div class="padding-tb radius bg-olive">橄榄</div>
                </div>
                <div data-color="green" class="padding-xs">
                    <div class="padding-tb radius bg-green">森绿</div>
                </div>
                <div data-color="cyan" class="padding-xs">
                    <div class="padding-tb radius bg-cyan">天青</div>
                </div>
                <div data-color="blue" class="padding-xs">
                    <div class="padding-tb radius bg-blue">海蓝</div>
                </div>
                <div data-color="purple" class="padding-xs">
                    <div class="padding-tb radius bg-purple">姹紫</div>
                </div>
                <div data-color="mauve" class="padding-xs">
                    <div class="padding-tb radius bg-mauve">木槿</div>
                </div>
                <div data-color="pink" class="padding-xs">
                    <div class="padding-tb radius bg-pink">桃粉</div>
                </div>
                <div data-color="brown" class="padding-xs">
                    <div class="padding-tb radius bg-brown">棕褐</div>
                </div>
                <div data-color="grey" class="padding-xs">
                    <div class="padding-tb radius bg-grey">玄灰</div>
                </div>
                <!---->
                <div data-color="black" class="padding-xs">
                    <div class="padding-tb radius bg-black">墨黑</div>
                </div>
                <div data-color="white" class="padding-xs">
                    <div class="padding-tb radius bg-white">雅白</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>